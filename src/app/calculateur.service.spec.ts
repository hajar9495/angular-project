import { TestBed } from '@angular/core/testing';

import { CalculateurService } from './calculateur.service';

describe('CalculateurService', () => {
  let service: CalculateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
