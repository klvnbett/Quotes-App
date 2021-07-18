import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title='THE BEST QUOTES OF ALL TIME';
  quotes:Quote[]=[
    // {id:1,name:'Resentment',description:'having resentment in your heart is like taking poison and expecting the other person to die',author:'nelson mandela',submittedBy:'bett',completeDate:Date(2021,7,18)}
    new Quote(1,'Resentment','Having resentment in your heart is like taking poison and expecting the other person to die','Nelson mandela',new Date(2021,7,18),0,0),
    new Quote(2,'control','You have mission.you control your schedule, you control your life','Benjamin Franklin',new Date(),0,0)
  ];
  addNewQuote(quote:Quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription=this.quotes[index].showDescription;
  }
  completeQuote(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
    deleteQuote(isComplete, index){
      if(isComplete){
        let toDelete= confirm(`Are you sure you want to delete this amazing quote by ${this.quotes[index].name}?`)
        if(toDelete)
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
