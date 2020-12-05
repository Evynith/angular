import { TestBed } from '@angular/core/testing';

import { CarritoPeluchesService } from './carrito-peluches.service';

describe('CarritoPeluchesService', () => {
  let service: CarritoPeluchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoPeluchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
