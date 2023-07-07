import { TestBed } from '@angular/core/testing';

import { GroupeActionServiceService } from '../groupe-action-service.service';

describe('GroupeActionServiceService', () => {
  let service: GroupeActionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeActionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
