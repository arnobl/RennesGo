import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextComponent } from './next/next.component';
import { HttpClientModule } from '@angular/common/http';
import { Network } from './model/Network';
import {MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [Network],
  bootstrap: [AppComponent]
})
export class AppModule { }
