import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: any;
  @Output() isComplete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote(){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}
