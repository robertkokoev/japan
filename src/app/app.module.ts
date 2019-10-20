import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { ButtonComponent } from './buttons/button/button.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityInfoService } from './services/cityInfo.service';
import { FooterComponent } from './footer/footer.component';
import { CultureComponent } from './culture/culture.component';
import { HistoryComponent } from './culture/history/history.component';
import { HistoryAbstractService } from './services/history-abstract.service';
import { HistoryGetService } from './services/history-get.service';
import { MockHistoryService } from './services/mock.history.service';
import { NewsComponent } from './news/news.component';
import { AbstractNewsService } from './services/abstract-news.service'
import { HttpNews } from './services/http-news.service';
import { MockNewsService } from './services/mock.news.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ButtonGroupComponent,
    ButtonComponent,
    FooterComponent,
    CultureComponent,
    HistoryComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonToggleModule,
    BrowserModule, 
    BrowserAnimationsModule
  ],
  providers: [
    CityInfoService,
    { provide: HistoryAbstractService, useClass: MockHistoryService } ,
    { provide: AbstractNewsService, useClass: MockNewsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
