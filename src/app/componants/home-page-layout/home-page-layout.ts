import { Component, inject } from '@angular/core';
import { CardsData } from '../../services/cards-data';
import { card } from '../../types/card.type';
import { TypeOneCard } from '../type-one-card/type-one-card';
import { Pill } from "../pill/pill";

@Component({
  selector: 'app-home-page-layout',
  imports: [TypeOneCard, Pill],
  templateUrl: './home-page-layout.html',
  styleUrl: './home-page-layout.css'
})
export class HomePageLayout {
  cardServise = inject(CardsData);
  sectionsCards: Array<card> = this.cardServise.homeLayoutCards;
}
