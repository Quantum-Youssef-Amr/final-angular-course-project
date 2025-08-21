import { Component, inject } from '@angular/core';
import { CardsData } from '../../services/cards-data';
import { Pill } from "../pill/pill";
import { TypeOneCard } from "../type-one-card/type-one-card";

@Component({
  selector: 'app-product-page',
  imports: [Pill, TypeOneCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {
  cardDataService = inject(CardsData);
  cardData = this.cardDataService.pageCards;
}
