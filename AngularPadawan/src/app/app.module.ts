import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
// import { InputComponent } from './input/input.component';
// import { DisplayComponent } from './display/display.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './home/first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // InputComponent,
    // DisplayComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
