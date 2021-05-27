import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRODUCT_ROUTES } from './admin/produits/produit.route';
import { UsersComponent } from './admin/users/users.component';
import { CONTACT_ROUTES } from './contact/contact.routes';
import { CreateEmployeeComponent } from './employees/create-emplyee/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { LoginComponent } from './login/login.component';
import { ShopproduitComponent } from './shopproduit/shopproduit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin/users', component: UsersComponent },
  ...PRODUCT_ROUTES,
  ...CONTACT_ROUTES,
  { path: 'shop', component: ShopproduitComponent },

  { path: 'home/home-banner/', component: HomeBannerComponent },

  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
