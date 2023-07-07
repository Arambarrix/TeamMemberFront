import { Injectable } from '@angular/core';
import { ContratTravail } from '../models/contrat-travail';
import { HttpClient } from '@angular/common/http';
import { Service } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class ContratTravailServiceService extends Service<ContratTravail>{

  constructor(http:HttpClient) { 
    super(http,"contrats-travail")
  }
}
