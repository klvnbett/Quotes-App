import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title='THE BEST QUOTES OF ALL TIME';
  quotes:Quote[]=[
    // {id:1,name:'Resentment',description:'having resentment in your heart is like taking poison and expecting the other person to die',author:'nelson mandela',submittedBy:'bett',completeDate:Date(2021,7,18)}
    new Quote(1,'Resentment','Having resentment in your heart is like taking poison and expecting the other person to die','Nelson mandela',new Date(2021,7,18),0,0),
    new Quote(1,'control','You have mission.you control your schedule, you control your life','Benjamin Franklin',new Date(),0,0)
  ];
  addNewQuote(quote:Quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
