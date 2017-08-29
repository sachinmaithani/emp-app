import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  fetchEmployees(){
    var  employees = [
              {"id":1,"name":"sachin","surname":"maithani","level":3,"salary":30000},
              {"id":2,"name":"nitin","surname":"maithani","level":2,"salary":40000},            
              {"id":3,"name":"jatin","surname":"sharma","level":1,"salary":50000},
              {"id":4,"name":"vipin","surname":"verma","level":4,"salary":20000},
              {"id":5,"name":"bipin","surname":"bhuguna","level":5,"salary":10000},
              ];
    return employees;            
  }
}
