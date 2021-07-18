import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:any;
  @Output() isComplete=new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
