import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmployeesService} from '../services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  angForm: FormGroup;
  employee: any;
  employees: any = {};
  employeeData:any;
  empId: any;
  response: any;
  constructor(private fb: FormBuilder, private es: EmployeesService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
        name: ['', Validators.required],
        salary: ['', Validators.required],
        age: ['', Validators.required],
    });
  }

  apiCall(){
    this.es.getEmployees().subscribe((data1) => {
      this.employees = data1;
      this.employeeData = this.employees.data.find(e => e.id == this.empId);
      //this.employees.data = [];
    });
  }

  updateEmployee() {
    this.route.params.subscribe(params => {
        this.es.updateEmployee(this.angForm.value, params.id).subscribe(data => {
          this.response = data;
          if(this.response.status == 'success') {
            this.router.navigate(['/employees']);
            this.toastr.success("employee updated successfully!")
          } else {
            this.toastr.error("Something wrong! Please try again!");
          }
        });
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params) {
        this.empId = params.get('id');
        this.apiCall();
      } else {
        console.log('failed');
      }
    });
  }

}
