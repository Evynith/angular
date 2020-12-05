import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluchesComponent } from './peluches.component';

describe('PeluchesComponent', () => {
  let component: PeluchesComponent;
  let fixture: ComponentFixture<PeluchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeluchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeluchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
