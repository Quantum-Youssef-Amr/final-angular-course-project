import { Component, Input } from '@angular/core';
import { card } from '../../types/card.type';

@Component({
  selector: 'app-type-three-card',
  imports: [],
  templateUrl: './type-three-card.html',
  styleUrl: './type-three-card.css'
})
export class TypeThreeCard {
  @Input() cardInfo!: card;
}
