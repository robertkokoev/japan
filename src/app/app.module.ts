import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { ButtonComponent } from './buttons/button/button.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityInfoService } from './services/city-services/cityInfo.service';
import { FooterComponent } from './components/footer/footer.component';
import { CultureComponent } from './culture/culture.component';
import { HistoryComponent } from './culture/history/history.component';
import { HistoryAbstractService } from './services/history-services/history-abstract.service';
import { MockHistoryService } from './services/history-services/mock.history.service';
import { NewsComponent } from './components/news/news.component';
import { AbstractNewsService } from './services/news-services/abstract-news.service'
import { MockNewsService } from './services/news-services/mock.news.service';
import { VisitComponent } from './components/visit/visit.component';
import { AboutComponent } from './components/about/about.component';

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
    NewsComponent,
    VisitComponent,
    AboutComponent
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
