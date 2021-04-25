import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewUserComponent } from './admin/users/viewuser/viewuser.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { AddproduitComponent } from './admin/produits/addproduit/addproduit.component';
import { ShopproduitComponent } from './shopproduit/shopproduit.component';
import { ViewproduitComponent } from './admin/produits/viewproduit/viewproduit.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './employees/create-emplyee/create-employee.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BasicAuthInterceptorService } from './services/login/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewUserComponent,
    ProduitsComponent,
    AddproduitComponent,
    ViewproduitComponent,
    ShopproduitComponent,
    LoginComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    HomeBannerComponent,
    LogoutComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
