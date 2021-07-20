import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote (1,'Bett','Resentment','resentement is like taking poison and expect the next person to die.','Nelson mandela', new Date(2021,7,16),0,0),
    new Quote (2,'Wilson','Life','Life has no limitations except the ones you make.','Max Frisch',new Date(2021,7,14),0,0),
    new Quote (3,'kenneth','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2021,5,23),0,0),
    new Quote (4,'Karen','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2021,7,17),0,0),
    new Quote (5,'Janet','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2021,7,20),0,0),
  ]
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  myDate = Date.now();
  displayInfo(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
