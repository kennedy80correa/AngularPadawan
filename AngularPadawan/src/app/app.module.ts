import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent} from './home/first/first.component';
import { DropdownDirective } from './dropdown/dropdown.directives';
import { SecondComponent } from './home/second/second.component';
import { ThirdComponent } from './home/third/third.component';
import { FourthComponent } from './home/fourth/fourth.component';
import { FifthComponent } from './home/fifth/fifth.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // InputComponent,
    // DisplayComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FirstComponent,
    DropdownDirective,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
