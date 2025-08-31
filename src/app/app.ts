import { Component, inject, OnInit, signal } from '@angular/core';
import { NavBar } from './componants/nav-bar/nav-bar';
import { Banner } from './componants/banner/banner';
import { HomePageLayout } from './componants/home-page-layout/home-page-layout';
import { FeaturesSection } from './componants/features-section/features-section';
import { ProductPage } from './componants/product-page/product-page';
import { ThemesSection } from './componants/themes-section/themes-section';
import { Footer } from './componants/footer/footer';
import { CardsData } from './services/cards-data';
import { ApiResponce } from './types/card.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    NavBar,
    Banner,
    HomePageLayout,
    FeaturesSection,
    ProductPage,
    ThemesSection,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Weather wizard');
  cardData = inject(CardsData);

  ngOnInit(): void {
    let currentDate = new Date();
    let localData = localStorage.getItem(
      `${currentDate.getDate()}-
      ${currentDate.getMonth()}
      -${currentDate.getFullYear()}`
    );
    
    if (localData == null) {
      this.cardData
        .getWeatherFromApi()
        .pipe(
          catchError((err) => {
            throw err;
          })
        )
        .subscribe((Response) => {
          this.cardData.JsonData.set(Response);
          this.cardData.saveData(this.cardData.JsonData());
          this.cardData.formateData(this.cardData.JsonData());
        });
    } else {
      this.cardData.JsonData.set(JSON.parse(localData) as ApiResponce);
      this.cardData.formateData(JSON.parse(localData) as ApiResponce);
    }
  }
}
