import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CultureComponent } from './culture/culture.component';
import { HistoryComponent } from './culture/history/history.component';
import { NewsComponent } from './news/news.component';
import { VisitComponent } from './visit/visit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'culture/history', component: HistoryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'visit', component: VisitComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
