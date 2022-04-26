import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url='http://localhost:3000/'
iteams: Subject<any>= new BehaviorSubject<any>(8)
  constructor(private http:HttpClient) { }

  postform(keyname:any,data:any){
    var path = this.url+keyname
    var result= this.http.post(path,data)
     return result
  }
  getform(keyname:any){
    var path = this.url+keyname
    return this.http.get(path)
  }
  deleteform(keyname:any,ans:any){
    var path=this.url+keyname;
    console.log(path);
    var result = this.http.delete(path +ans.id)
    return result;

  }
  updateData(keyName:any,data:any){
    var path=this.url+keyName;
    console.log(path)
    var result= this.http.put(path,data)
    return result; 
  }

}
