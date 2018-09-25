import { Component, OnInit } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  text1: string;

  constructor(public ckeditor: CKEditorComponent) {
  }

  ngOnInit() {
    this.text1 = null;
  }

}
