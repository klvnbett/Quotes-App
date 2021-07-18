import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    {id:1,name:'Resentment',description:'having resentment in your heart is like taking poison and expecting the other person to die',author:'nelson mandela',submittedBy:'bett',Date(2021,7,18)}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
