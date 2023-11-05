import { TestBed } from '@angular/core/testing';

import { ContratProjetService } from './contrat-projet.service';

describe('ContratProjetService', () => {
  let service: ContratProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
