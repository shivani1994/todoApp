import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmployeesService} from '../services/employees.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-employees-add',
    templateUrl: './employees-add.component.html',
    styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent implements OnInit {
    angForm: FormGroup;
    response: any;
    constructor(private fb: FormBuilder, private es: EmployeesService, private router: Router, private toastr: ToastrService) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            salary: ['', Validators.required],
            age: ['', Validators.required],
        });
        console.log(this.angForm);
    }

    addEmployee() {
        this.es.addEmployee(this.angForm.value).subscribe(data => {
            this.response = data;
            if(this.response.status == 'success') {
                this.router.navigate(['/employees']);
                this.toastr.success("employee added successfully!");
            } else {
                this.toastr.error("Something wrong! Please try again!");
            }
        });
    }

    ngOnInit() {
    }

}
