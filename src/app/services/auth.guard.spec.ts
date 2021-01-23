import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { FirebaseService } from './firebase.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let service: jasmine.SpyObj<FirebaseService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let guard: AuthGuard;

  beforeEach(() => {
    const MockRouter = jasmine.createSpyObj('Router', ['navigate']);
    const MockFirebaseService = jasmine.createSpyObj('FirebaseService', ['googleSignin', 'facebookSignin'])
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: MockRouter },
        { provide: FirebaseService, useClass: MockFirebaseService },
      ]
    });
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(FirebaseService) as jasmine.SpyObj<FirebaseService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

});
