import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote (1,'Bett','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12),0,0),
    new Quote (2,'Wilson','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2019,7,14),0,0),
    new Quote (3,'kenneth','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3),0,0),
    new Quote (4,'Karen','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2019,7,7),0,0),
    new Quote (5,'Janet','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2019,7,17),0,0),
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
