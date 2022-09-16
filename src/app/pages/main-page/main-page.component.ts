import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';
import { cards as data } from 'src/app/data/cards';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  cards: ICard[] = data;
  constructor() { }

  ngOnInit(): void {
  }

}
