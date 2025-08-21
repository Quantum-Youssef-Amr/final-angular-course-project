import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLayout } from './home-page-layout';

describe('HomePageLayout', () => {
  let component: HomePageLayout;
  let fixture: ComponentFixture<HomePageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
