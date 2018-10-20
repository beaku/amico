import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VerificationComponent } from './components/verification/verification.component';
import { DriverComponent } from './components/ride/driver/driver.component';
import { PassengerComponent } from './components/ride/passenger/passenger.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LiveComponent } from './components/ride/live/live.component';
import { EndComponent } from './components/ride/end/end.component';
import { SplashComponent } from './components/splash/splash.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerificationComponent,
    DriverComponent,
    PassengerComponent,
    ProfileComponent,
    LiveComponent,
    EndComponent,
    SplashComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
