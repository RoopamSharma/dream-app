import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserData } from './mycomp/shared/userdata.service'
import { DeptData } from './mycomp/shared/departmentdata.service'
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { UsercompComponent } from './usercomp/usercomp.component';
import {FormsModule} from '@angular/forms';
import { FavcompComponent } from './favcomp/favcomp.component';
import { LikecompComponent } from './likecomp/likecomp.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    HeadercompComponent,
    FootercompComponent,
    UsercompComponent,
    FavcompComponent,
    LikecompComponent,
    PipedemoComponent,
    LoginComponent,
    RegistrationComponent,
    UserdetailsComponent,
    PortfolioComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [UserData,DeptData],
  bootstrap: [AppComponent]
})
export class AppModule { }
