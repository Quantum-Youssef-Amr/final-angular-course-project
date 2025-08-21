import { Component, Input } from '@angular/core';
import { card } from '../../types/card.type';

@Component({
  selector: 'app-type-two-card',
  imports: [],
  templateUrl: './type-two-card.html',
  styleUrl: './type-two-card.css'
})
export class TypeTwoCard {
  @Input() cardInfo!: card;
}
