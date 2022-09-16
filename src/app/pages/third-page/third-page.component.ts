import { Component, OnInit } from '@angular/core';
import { cards2 as data } from 'src/app/data/cards';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {
  cards: ICard[] = data;
  constructor() { }

  ngOnInit(): void {
  }

}
