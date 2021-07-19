import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quote-detail.component.html',
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
  // likes():number=0;
  // clickCount_likes():void{
  //   this.likes++
  // }
  // dislikes():number=0;
  // clickCount_dislikes():void{
  //   this.dislikes
  // }
  upvote(){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
