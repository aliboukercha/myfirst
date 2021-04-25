import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddproduitComponent } from './admin/produits/addproduit/addproduit.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { ViewproduitComponent } from './admin/produits/viewproduit/viewproduit.component';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { UsersComponent } from './admin/users/users.component';
import { ViewUserComponent } from './admin/users/viewuser/viewuser.component';
import { ContactComponent } from './contact/contact.component';
import { CreateEmployeeComponent } from './employees/create-emplyee/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { ShopproduitComponent } from './shopproduit/shopproduit.component';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    ViewUserComponent,
    AdduserComponent,
    ProduitsComponent,
    AddproduitComponent,
    ViewproduitComponent,
    ShopproduitComponent,
    LoginComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    ContactComponent,
  ],
  imports: [CommonModule, FormsModule, PagesRoutingModule],
})
export class PagesModule {}
