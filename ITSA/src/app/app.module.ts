import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import {routing} from "./app.routing";
import { DecComponent } from './dec.component';
import { FacComponent } from './fac.component';
import { ArrComponent } from './arr.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DecComponent,
    FacComponent,
    ArrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }