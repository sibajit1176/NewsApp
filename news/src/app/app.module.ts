import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http';
import {TcnewsapiService} from './service/tcnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { IntertainmentComponent } from './intertainment/intertainment.component';
import { ScienceComponent } from './science/science.component';
import { GeneralComponent } from './general/general.component';
import { SportsComponent } from './sports/sports.component'
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    IntertainmentComponent,
    ScienceComponent,
    GeneralComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
