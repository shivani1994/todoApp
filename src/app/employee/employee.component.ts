import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: []|any;
  private id: any;
  private name: any;
  private age: any;
  private btn_text = "Submit";
  private index: any;
  constructor(private ele: ElementRef) {
    this.employees = [
      {"id": 1, "name": "Test A", "age": "20"},
      {"id": 2, "name": "Test B", "age": "21"},
      {"id": 3, "name": "Test C", "age": "22"}
    ]
  }

  submit() {
    // use separately
    // let id = this.ele.nativeElement.querySelector('.emp_id').value;
    // let name = this.ele.nativeElement.querySelector('.emp_name').value;
    // let age = this.ele.nativeElement.querySelector('.emp_age').value;
    // let data = {"id": id, "name": name, "age": age};

    // by using two way data binding(ngmodel)
    let data = {"id": this.id, "name": this.name, "age": this.age};
    if(this.btn_text == "Submit") {
      this.employees.push(data);
    } else if(this.btn_text == "Update") {
      this.employees.splice(this.index, 1, data);
    }

    this.id = "";
    this.name = "";
    this.age = "";
    this.btn_text = "Submit"
  }

  edit(emp, index) {
    event.preventDefault();
    this.id = emp.id;
    this.name = emp.name;
    this.age = emp.age;
    this.index = index;
    this.btn_text = "Update";
  }

  delete(index) {
    event.preventDefault();
    this.employees.splice(index, 3);
  }

  ngOnInit() {
  }

}
