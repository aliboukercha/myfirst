import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopproduitComponent } from './shopproduit.component';

describe('ShopproduitComponent', () => {
  let component: ShopproduitComponent;
  let fixture: ComponentFixture<ShopproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
