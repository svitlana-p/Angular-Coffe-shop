import { Component, OnInit } from '@angular/core';
import { cards2 as data } from 'src/app/data/cards';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  cards: ICard[] = data;
  term = '';
  filterValue = '';

  filterPressed(value: string) {
    this.filterValue = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
