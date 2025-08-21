import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeThreeCard } from './type-three-card';

describe('TypeThreeCard', () => {
  let component: TypeThreeCard;
  let fixture: ComponentFixture<TypeThreeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeThreeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeThreeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
