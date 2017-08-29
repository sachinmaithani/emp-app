import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, text: any): any {
    //check if search  term is undefined
    if(text === undefined) return employees;
    if(text == "") return employees;
    return employees.filter(function(employee){
       if(employee.id == text)
        return true;
      else
        return false; 
    })
    
  }

}
