// import { Quote } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote=new Quote(0,"","","","",new Date());
  @Output() add= new EventEmitter<Quote>();

  addQuote(){
    this.add.emit(this.quote);
    this.quote=new Quote(0,"","","","",new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
