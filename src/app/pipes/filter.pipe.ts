import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card';
import { cards2 as cards } from '../data/cards';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(cards: ICard[], filters: string): ICard[] {
    switch (filters) {
      case 'Brasil':
        return cards.filter(card => card.description === 'Brasil');
      case 'Kenya':
        return cards.filter(card => card.description === 'Kenya');
      case 'Columbia':
        return cards.filter(card => card.description === 'Columbia');
      default:
        return cards;
    }
  };
};


