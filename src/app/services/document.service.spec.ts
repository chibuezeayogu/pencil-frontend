import { TestBed } from '@angular/core/testing';

import { DocumentService } from './document.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('DocumentService', () => {
  let service: DocumentService;
  let routerSpy: jasmine.SpyObj<Router>;
  let fireStoreSpy: jasmine.SpyObj<AngularFirestore>;

  const MockForestore = {
    collection: jasmine.createSpy('collection').and.returnValue({
      doc: jasmine.createSpy('doc').and.returnValue({
        get: jasmine.createSpy('get').and.returnValue({ text: "Testing get function"}),
        update: jasmine.createSpy('update').and.returnValue(undefined),
        set: jasmine.createSpy('set').and.returnValue(undefined)
      }),
    })
  }

  beforeEach(() => {
    const MockRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
      providers: [
        DocumentService,
        { provide: Router, useValue: MockRouter},
        { provide: AngularFirestore, useValue: MockForestore },
        
      ]
    });
    service = TestBed.inject(DocumentService);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fireStoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUserDocument should return value from stubbed spy', () => {
    expect(service.getUserDocument()).toBe(MockForestore.collection().doc().get());
  });

  it('#createUserDocument should return value from stubbed spy', () => {
    service.createUserDocument();
    expect(service.createUserDocument()).toEqual(undefined);
  });

  it('#updateUserDocument should return value from stubbed spy', () => {
    expect(service.updateUserDocument('')).toEqual(undefined)
  });
});
