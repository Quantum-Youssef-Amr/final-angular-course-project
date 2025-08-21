import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTwoCard } from './type-two-card';

describe('TypeTwoCard', () => {
  let component: TypeTwoCard;
  let fixture: ComponentFixture<TypeTwoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeTwoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTwoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
