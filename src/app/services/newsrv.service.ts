import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {employee } from '../services/employeeInf';

@Injectable({
  providedIn: 'root'
})
export class NewsrvService {

  constructor(private http:HttpClient) { }
  private headers=new HttpHeaders({'Content-Type':'application/json'});

  data= "http://localhost:1234/emp";

  // get each object data
  getjsonData(): Observable<employee[]> {
    return this.http.get<employee[]>(this.data);
  }
  // add new data in in existing data
  postjsonData(abc): Observable<employee[]>{
    return this.http.post<employee[]>(this.data,abc);
  }
  // update exiting data of object 
  updatejsonData(id, updatedEmp): Observable<employee[]>{
  const url=`${"http://localhost:1234/emp"}/${id}`;
    return this.http.put<employee[]>(url,JSON.stringify(updatedEmp),{headers:this.headers});
  }
  // delete data of object by id
  deletejsonData(id){
  const url=`${"http://localhost:1234/emp"}/${id}`;
    return this.http.delete(url,{headers:this.headers}).toPromise();
  }
}
