import { Component, inject, OnInit, signal } from '@angular/core';
import { CardsData } from '../../services/cards-data';
import { ApiResponce, card } from '../../types/card.type';
import { TypeOneCard } from '../type-one-card/type-one-card';
import { Pill } from "../pill/pill";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page-layout',
  imports: [TypeOneCard, Pill, DatePipe],
  templateUrl: './home-page-layout.html',
  styleUrl: './home-page-layout.css'
})
export class HomePageLayout{
  cardServise = inject(CardsData);
  currentDate = new Date();
}
