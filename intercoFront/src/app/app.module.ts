import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Authentication/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {  MainComponent } from './main-menu/main-menu.component';
import { HttpInterceptorServiceService } from './Utils/http-interceptor-service.service';
import { AuthService } from './Services/Authentication/auth.service';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffComponent } from './staff/staff.component';
import { FooterComponent } from './footer/footer.component';
import { MatTableModule } from '@angular/material' ;
import { MatFormFieldModule } from '@angular/material' ;
import { MatInputModule } from '@angular/material';
import { ConsultantInfoComponent } from './consultant-info/consultant-info.component';
import { BilanMoisComponent } from './bilan-mois/bilan-mois.component' ;
 

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainComponent,
    HeaderComponent,
    StaffComponent,
    FooterComponent,
    ConsultantInfoComponent,
    BilanMoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorServiceService,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
