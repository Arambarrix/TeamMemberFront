import { Injectable } from '@angular/core';
import { Service } from './abstract.service';
import { Projet } from '../models/projet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService extends Service<Projet>{

  constructor(http:HttpClient) { 
    super(http,"projets")
  }
}
