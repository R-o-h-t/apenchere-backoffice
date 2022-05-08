import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { TableOfferComponent } from './home/table-offer/table-offer.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { StatsComponent } from './stats/stats.component';
import {LegacyAmplifyUiModule} from "@aws-amplify/ui-angular/legacy";
import { CardOfferComponent } from './card-offer/card-offer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableOfferComponent,
    UserComponent,
    HeaderComponent,
    StatsComponent,
    CardOfferComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AmplifyAuthenticatorModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatTableModule,
        MatInputModule,
        MatIconModule,
        LegacyAmplifyUiModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
