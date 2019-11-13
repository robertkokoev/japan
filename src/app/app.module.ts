import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ButtonComponent } from './components/button/button.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockCityInfoService } from './services/city-services/mock-city-info.service';
import { FooterComponent } from './components/footer/footer.component';
import { CultureComponent } from './components/culture/culture.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryAbstractService } from './services/history-services/history-abstract.service';
import { MockHistoryService } from './services/history-services/mock-history.service';
import { NewsComponent } from './components/news/news.component';
import { AbstractNewsService } from './services/news-services/abstract-news.service'
import { MockNewsService } from './services/news-services/mock-news.service';
import { VisitComponent } from './components/visit/visit.component';
import { AboutComponent } from './components/about/about.component';
import { AbstractCityService } from './services/city-services/abstract-city.service';
import { MockCityService } from './services/city-services/mock-city.service';
import { AbstractCityInfoService } from './services/city-services/abstract.city-info.service';

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
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: HistoryAbstractService, useClass: MockHistoryService } ,
    { provide: AbstractNewsService, useClass: MockNewsService},
    { provide: AbstractCityService, useClass: MockCityService},
    { provide: AbstractCityInfoService, useClass: MockCityInfoService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
