import { TestBed } from '@angular/core/testing';

import { ContratProjetServiceService } from '../contrat-projet-service.service';

describe('ContratProjetServiceService', () => {
  let service: ContratProjetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratProjetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
