import { Component, inject } from '@angular/core';
import { Pill } from "../pill/pill";
import { CardsData } from '../../services/cards-data';
import { card } from '../../types/card.type';
import { TypeTwoCard } from '../type-two-card/type-two-card';

@Component({
  selector: 'app-features-section',
  imports: [Pill, TypeTwoCard],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css'
})
export class FeaturesSection {
  cardDataServise = inject(CardsData);
  cards: Array<card> = this.cardDataServise.featuresCards;
}
