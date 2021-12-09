import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedproductsComponent } from './recommendedproducts.component';

describe('RecommendedproductsComponent', () => {
  let component: RecommendedproductsComponent;
  let fixture: ComponentFixture<RecommendedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
