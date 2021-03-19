import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { ShopproduitComponent } from './shopproduit/shopproduit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/produits', component: ProduitsComponent },
  { path: 'shop', component: ShopproduitComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }