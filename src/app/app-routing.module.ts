import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRODUIT_ROUTE } from './admin/produits/produit.route';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './login/login.component';
import { ShopproduitComponent } from './shopproduit/shopproduit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'admin/users', component: UsersComponent },
  PRODUIT_ROUTE,
  { path: 'shop', component: ShopproduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
