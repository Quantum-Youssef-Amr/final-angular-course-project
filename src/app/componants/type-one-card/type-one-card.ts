import { Component, Input } from '@angular/core';
import { card } from '../../types/card.type';

@Component({
  selector: 'app-type-one-card',
  imports: [],
  templateUrl: './type-one-card.html',
  styleUrl: './type-one-card.css'
})
export class TypeOneCard {
  @Input() cardinfo!: card;
}
