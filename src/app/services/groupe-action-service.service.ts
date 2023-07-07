import { Injectable } from '@angular/core';
import { Service } from './abstract.service';
import { GroupeAction } from '../models/groupe-action';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupeActionServiceService extends Service<GroupeAction>{

  constructor(http:HttpClient) { 
    super(http,"groupe-actions")
  }
}
