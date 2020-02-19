import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import Employees from './employees';
 import { tap } from 'rxjs/operators'; 
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  base_url = 'http://dummy.restapiexample.com/api/v1';
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addEmployee(employeeData) {
    return this.http.post(this.base_url+'/create', employeeData)
        .pipe(tap(res => console.log(res)));
  }

  getEmployees(){
    return this.http.get(this.base_url+'/employees');
  }

  editEmployee(id) {
    return this.http.get(this.base_url+'/employee/'+id);
  }

  updateEmployee(employeeData, id) {
    return this.http.put(this.base_url+'/update/'+id, employeeData);
  }

  deleteEmployee(id) {
    return this.http.delete(this.base_url+'/delete/'+id);
  }
}
