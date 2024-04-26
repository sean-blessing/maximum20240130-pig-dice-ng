import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { ResultsComponent } from './feature/results/results.component';
import { PlayComponent } from './feature/play/play.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'play/:count', component: PlayComponent },
  { path: 'results', component:ResultsComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
