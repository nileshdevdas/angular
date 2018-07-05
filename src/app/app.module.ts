import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CountryComponent } from './country/country.component';
import { WeatherComponent } from './weather/weather.component';
import {DataService} from './services/data.service';
import {HttpModule} from '@angular/http'; //on ts import
// here i imported the message
import {MessageService} from './MessageService';
@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CountryComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService, MessageService], // added as the provider
  bootstrap: [AppComponent]
})
export class AppModule { }
