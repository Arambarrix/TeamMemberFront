import { TestBed } from '@angular/core/testing';

import { ContratTravailServiceService } from './contrat-travail-service.service';

describe('ContratTravailServiceService', () => {
  let service: ContratTravailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratTravailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
