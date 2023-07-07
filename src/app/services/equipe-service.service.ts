import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './abstract.service';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeServiceService extends Service<Equipe>{
  constructor(http:HttpClient) {
    super(http,"equipes")
  }
}
