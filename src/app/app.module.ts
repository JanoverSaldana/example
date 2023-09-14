import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LogoApiService} from "./shared/services/logo-api.service";
import {NewsApiService} from "./news/services/news-api.service";
import { MainContentComponent } from './news/components/main-content/main-content.component';
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import { FooterContentComponent } from './news/components/footer-content/footer-content.component';
import { NavComponent } from './news/components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    FooterContentComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgOptimizedImage,
  ],
  providers: [LogoApiService, NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
