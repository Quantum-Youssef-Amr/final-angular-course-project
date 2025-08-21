import { TestBed } from '@angular/core/testing';

import { CardsData } from './cards-data';

describe('CardsData', () => {
  let service: CardsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
