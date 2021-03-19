import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproduitComponent } from './viewproduit.component';

describe('ViewproduitComponent', () => {
  let component: ViewproduitComponent;
  let fixture: ComponentFixture<ViewproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
