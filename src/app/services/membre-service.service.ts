import { Injectable } from '@angular/core';
import { Service } from './abstract.service';
import { Membre } from '../models/membre';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembreServiceService extends Service<Membre>{
  constructor(http:HttpClient) { 
    super(http,"membres")
  }
}
