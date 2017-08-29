import { Component,OnInit,Input,OnChanges,SimpleChange } from '@angular/core';
import { FormGroup , FormControl ,Validators} from '@angular/forms';
import {EmployeeService} from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showDeleteEmp = false;
  showAddEmp = false;
  warning = '';
  empId:any;  
  employees:any;
  
  constructor(private employeeService:EmployeeService){        
  }            

  ngOnInit(){
    this.employees = this.employeeService.fetchEmployees();
  }

  showEmpForm(){
      this.showAddEmp = !this.showAddEmp;
      this.showDeleteEmp = false;
  } 
  
  delEmpForm(){
      this.showDeleteEmp = !this.showDeleteEmp;
      this.showAddEmp = false;
      this.empId='';
      this.warning='';
  }

  onSubmit = function(emp){
    var found = false;
    var i = 0;
    var maxId = 1;
    for (let i in this.employees) {
      
        // get max id
        if (maxId <= this.employees[i].id)
            maxId = this.employees[i].id + 1;
        if (this.employees[i].id == emp.id)
            found = true;
        console.log(this.employees[i].id +":::"+maxId+"::"+found);
      }
    
    if (found)
        emp.id =  maxId;

    this.employees.push(emp);
	  console.log(emp);
  }

  deleteEmp(event,empId){
      event.preventDefault();
        if( this.employees.filter(function(emp){if(emp.id = empId) return true;else return false; }) ){    
            this.employees = this.employees.filter(function(emp){return emp.id != empId; });       
            this.warning='';
        }
  }            

  onlyNumberKey(event){
      event.target.value = event.target.value.replace(/^0+/, '');
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
  }
}
