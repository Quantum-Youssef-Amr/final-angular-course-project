import { Component, signal } from '@angular/core';
import { NavBar } from "./componants/nav-bar/nav-bar";
import { Banner } from "./componants/banner/banner";
import { HomePageLayout } from "./componants/home-page-layout/home-page-layout";
import { FeaturesSection } from "./componants/features-section/features-section";
import { ProductPage } from "./componants/product-page/product-page";
import { ThemesSection } from "./componants/themes-section/themes-section";
import { Footer } from "./componants/footer/footer";

@Component({
  selector: 'app-root',
  imports: [NavBar, Banner, HomePageLayout, FeaturesSection, ProductPage, ThemesSection, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('final-angular-course-project');
}
