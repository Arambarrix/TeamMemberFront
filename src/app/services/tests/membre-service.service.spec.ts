import { TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { MembreServiceService } from '../membre-service.service'
import { Membre } from 'src/app/models/membre';
import { Observable, of } from 'rxjs';

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
  it("Le service doit pouvoir récupérer la liste des membres",()=>{
    const result = 1
    let membres! :Membre[];
    mockService.findAll().subscribe(data=>{
      membres=data;
    })
    const req = httpMock.expectOne({
      method:'GET',
      url:mockService.getPath()
    })
    req.flush([Membre])
    expect(membres.length).toEqual(result)
    
  })
  afterEach(() => {
    httpMock.verify();
  });
  
});
