import { Component, OnInit } from '@angular/core';
//import employees from '../employees';
import { EmployeesService} from '../employees.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  page = 1;
  pageSize =10;
  res: any[];
  constructor(private es: EmployeesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.apiCall();
  }

  apiCall(){
    this.es.getEmployees().subscribe((data1) => {
      this.employees = data1;
      //this.employees.data = [];
    });
  }

  deleteEmployee(id) {
    this.es.deleteEmployee(id).subscribe(res => {
      if(res['status'] == "success") {
        this.toastr.success("Employee has been deleted successfully!");
      } else {
        this.toastr.error(res['message']);
      }
    });
  }
}
