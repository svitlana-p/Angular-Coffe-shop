import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card';
import { cards2 as cards } from '../data/cards';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cards: ICard[], search: string): ICard[] {
    return cards.filter(card => card.description.toLowerCase().includes(search.toLowerCase()));
  }

}
