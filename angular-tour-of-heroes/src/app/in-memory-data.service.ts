import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Onodera Punpun' },
      { id: 12, name: 'Tanaka Aiko' },
      { id: 13, name: 'Guts' },
      { id: 14, name: 'Gojô Satoru' },
      { id: 15, name: 'Elias Ainsworth' },
      { id: 16, name: 'Legion' },
      { id: 17, name: 'Dabi' },
      { id: 18, name: 'Aurelion Sol' },
      { id: 19, name: 'Amaterasu' },
      { id: 20, name: 'Cypher' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
