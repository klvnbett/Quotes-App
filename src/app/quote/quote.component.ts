import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title='THE BEST QUOTES OF ALL TIME';
  quotes:Quotes[]=[
    // {id:1,name:'Resentment',description:'having resentment in your heart is like taking poison and expecting the other person to die',author:'nelson mandela',submittedBy:'bett',completeDate:Date(2021,7,18)}
    new Quotes(1,'Resentment','Having resentment in your heart is like taking poison and expecting the other person to die','Nelson mandela',new Date(2021,7,18),0,0),
    new Quotes()
  ];
  addNewQuotes(quotes:Quotes){
    let quotesLength=this.quotes.length;
    quote.id=quotesLength+1;
    quotes.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
