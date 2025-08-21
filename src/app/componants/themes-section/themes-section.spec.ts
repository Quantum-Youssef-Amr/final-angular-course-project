import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesSection } from './themes-section';

describe('ThemesSection', () => {
  let component: ThemesSection;
  let fixture: ComponentFixture<ThemesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
