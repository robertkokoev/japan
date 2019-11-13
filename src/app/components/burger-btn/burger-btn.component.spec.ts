import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerBtnComponent } from './burger-btn.component';

describe('BurgerBtnComponent', () => {
  let component: BurgerBtnComponent;
  let fixture: ComponentFixture<BurgerBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
