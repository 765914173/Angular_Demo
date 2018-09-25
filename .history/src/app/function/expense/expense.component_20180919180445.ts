import { Component, OnInit } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(public ckec: CKEditorComponent) {
  }

  ngOnInit() {
  }

}
