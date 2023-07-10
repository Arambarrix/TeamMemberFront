import { TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { MembreServiceService } from '../membre-service.service'


describe('MembreServiceService', () => {
  let mockService:MembreServiceService;
  let httpMock: HttpTestingController;
  let injector:TestBed
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[MembreServiceService]
    })
    injector= getTestBed();
    mockService = injector.get(MembreServiceService)
    httpMock = injector.get(HttpTestingController)
  });
  

  it('Le service doit pouvoir exister', () => {
    expect(mockService).toBeTruthy();
  });
  it("Le composant HTTP doit exister",()=>{
    expect(mockService.getHttp()).not.toBeNull()
  })
  it("Le service doit définir son URL correctement", () => {
    expect(mockService.getPath()).toBe("http://localhost:8080/api/membres");
  });
  afterEach(() => {
    httpMock.verify();
  });
  
});
