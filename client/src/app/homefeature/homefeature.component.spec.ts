import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefeatureComponent } from './homefeature.component';

describe('HomefeatureComponent', () => {
  let component: HomefeatureComponent;
  let fixture: ComponentFixture<HomefeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
