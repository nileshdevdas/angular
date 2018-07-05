import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  users: number = 1000;
  http: Http = null;
  constructor(http: Http) {
    this.http = http;
  }
  print() {
    return this.users;
  }

  getEmployees() {
    //this code returns a Obb
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }


}
