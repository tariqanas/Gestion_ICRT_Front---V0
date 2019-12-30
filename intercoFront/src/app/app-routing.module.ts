import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainComponent } from './main-menu/main-menu.component';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'main-menu', component: mainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
