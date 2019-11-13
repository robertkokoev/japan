import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CultureComponent } from './components/culture/culture.component';
import { HistoryComponent } from './components/history/history.component';
import { NewsComponent } from './components/news/news.component';
import { VisitComponent } from './components/visit/visit.component';
import { AboutComponent } from './components/about/about.component';

const cultureChild: Routes = [
  {path: 'history', component: HistoryComponent}
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'culture', component: CultureComponent, children: cultureChild },
  { path: 'news', component: NewsComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'about', component: AboutComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
