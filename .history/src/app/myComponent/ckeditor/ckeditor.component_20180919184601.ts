import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string;
  @ViewChild('myCkeditor') ckeditor: any;
  constructor() {
    this.mycontent = `<p>My html content</p>`;
   }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea'
    };
  }

  onChange($event: any): void {
    console.log('onChange');
  }

}


