import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CultureComponent } from './components/culture/culture.component';
import { HistoryComponent } from './components/history/history.component';
import { NewsComponent } from './components/news/news.component';
import { VisitComponent } from './components/visit/visit.component';
import { AboutComponent } from './components/about/about.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'culture/history', component: HistoryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cities', component: CitiesComponent},
  { path: 'cities/:title', component: CityDetailsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
