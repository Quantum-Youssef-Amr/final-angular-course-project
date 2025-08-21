import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOneCard } from './type-one-card';

describe('TypeOneCard', () => {
  let component: TypeOneCard;
  let fixture: ComponentFixture<TypeOneCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeOneCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOneCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
