import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeluchesComponent } from './lista-peluches.component';

describe('ListaPeluchesComponent', () => {
  let component: ListaPeluchesComponent;
  let fixture: ComponentFixture<ListaPeluchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPeluchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPeluchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
