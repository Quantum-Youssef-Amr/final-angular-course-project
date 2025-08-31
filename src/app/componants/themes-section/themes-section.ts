import { Component, inject } from '@angular/core';
import { CardsData } from '../../services/cards-data';
import { Pill } from "../pill/pill";
import { TypeThreeCard } from '../type-three-card/type-three-card';

@Component({
  selector: 'app-themes-section',
  imports: [Pill, TypeThreeCard],
  templateUrl: './themes-section.html',
  styleUrl: './themes-section.css'
})
export class ThemesSection {
  CardDataService = inject(CardsData);
}
