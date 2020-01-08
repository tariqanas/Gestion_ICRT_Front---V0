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
 

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
