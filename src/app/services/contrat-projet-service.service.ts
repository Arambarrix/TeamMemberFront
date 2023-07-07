import { Injectable } from '@angular/core';
import { Service } from './abstract.service';
import { ContratProjet } from '../models/contrat-projet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratProjetServiceService extends Service<ContratProjet>{

  constructor(http:HttpClient) { 
    super(http,"contrats-projet")
  }
}
