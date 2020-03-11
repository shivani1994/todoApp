import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeesService } from './services/employees.service';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';      // for slim loading component
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';   // for http api integration
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';    

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // for animations  
import {ToastrModule} from 'ngx-toastr';
import { ErrorComponent } from './error/error.component';

// for firebase
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent,
    EmployeesAddComponent,
    EmployeesEditComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'todoApp'),
    AngularFirestoreModule,     // Only required for database features
    AngularFireStorageModule,   // Only required for storage features
    AngularFireAuthModule,      // Only required for auth features,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'employee/create',
        component: EmployeesAddComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'employee/edit/:id',
        component: EmployeesEditComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ])
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
