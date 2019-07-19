import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinesComponent } from './lines/lines.component';
import { HttpClientModule } from '@angular/common/http';
import { Network } from './model/Network';
import { User } from './model/User';
import {MatGridListModule, MatIconModule, MatBadgeModule} from '@angular/material';
import { AccountComponent } from './account/account.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    AngularFontAwesomeModule
  ],
  providers: [Network, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
