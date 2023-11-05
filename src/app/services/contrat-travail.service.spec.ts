import { TestBed } from '@angular/core/testing';

import { ContratTravailService } from './contrat-travail.service';

describe('ContratTravailService', () => {
  let service: ContratTravailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratTravailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
