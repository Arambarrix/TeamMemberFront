import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export abstract class Service<T>{
    private path="http://localhost:8080/api/";
    private url! :string;
    constructor(private http:HttpClient,url:string){
        this.setUrl(url)
    }
  public setUrl(url:string):void{
    this.url=url;
    this.path+=this.url
  }
  public getPath():string{
    return this.path;
  }
  public findAll (): Observable<T[]> {
    return this.http.get<T[]>(this.path);
  }
  public findOne(id:number): Observable<T> {
    return this.http.get<T>(this.path+"/"+id);
  }
  public createOne(t:any):void {
    this.http.post(this.path,t);
  }
  public updateOne(id:number,t:any):void{
    this.http.put(this.path+"/"+id,t);
  }
  public deleteOne(id:number):void {
    this.http.delete(this.path+"/"+id)
  }
  public deleteAll():void{
    this.http.delete(this.path)
  }
  public getHttp():HttpClient{
    return this.http;
  }
}