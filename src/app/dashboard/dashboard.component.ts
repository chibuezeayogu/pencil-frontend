import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { MediumEditor } from 'medium-editor';
declare var MathJax;

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('editable') editable: ElementRef;

  constructor(
    private docService: DocumentService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let usertext;
    const editableElement = this.editable.nativeElement;

    this.docService.getUserDocument()
    .subscribe(doc => {
      if (!doc.exists) {
        this.docService.createUserDocument()
      } else {
        usertext = doc.data() as object;
        editableElement.innerHTML = usertext.text;        
      }
      const editor = new MediumEditor(editableElement, {
        placeholder: { text: 'Type some text' }
      });
  
      editor.subscribe('editableInput', (eventObj, editable) => {
          MathJax.Hub.Queue(['Typeset', MathJax.Hub, editableElement])
        let content = editor.getContent();
        this.docService.updateUserDocument(content);
      });
    });
  } 
}
