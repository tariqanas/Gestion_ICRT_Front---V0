import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';
import { AuthGuard } from './Utils/auth.guard'; 
import { MainComponent } from './main-menu/main-menu.component';
import { StaffComponent } from './staff/staff.component';
import { ConsultantInfoComponent } from './consultant-info/consultant-info.component';
import { BilanMoisComponent } from './bilan-mois/bilan-mois.component';


const routes: Routes = [
  {path:'' , component:MainComponent , canActivate:[AuthGuard]},
  {path: 'login' , component:LoginPageComponent},
  {path: 'staff' , component:StaffComponent},
  {path: 'consultant' , component:ConsultantInfoComponent},
  {path: 'bilan' , component:BilanMoisComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
