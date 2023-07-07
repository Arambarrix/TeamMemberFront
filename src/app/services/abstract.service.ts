import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class Service<T>{
    private path="http://localhost:8080/api/";
    private url! :string;
    private http!:HttpClient;
    constructor(http:HttpClient,url:string){
        this.http=http
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
  public findOne <T>(id:string): Observable<T> {
    return this.http.get<T>(this.path+"/"+id);
  }
  public createOne(t:any):void {
    this.http.post(this.path,t);
  }
  public updateOne(id:string,t:any):void{
    this.http.put(this.path+"/"+id,t);
  }
  public deleteOne(id:string):void {
    this.http.delete(this.path+"/"+id)
  }
  public deleteAll():void{
    this.http.delete(this.path)
  }
}