import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderloginComponent } from './orderlogin.component';

describe('OrderloginComponent', () => {
  let component: OrderloginComponent;
  let fixture: ComponentFixture<OrderloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
