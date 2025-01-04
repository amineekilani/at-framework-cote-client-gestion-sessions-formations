import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'candidats', loadChildren: () => import('./candidats/candidats.module').then(m => m.CandidatsModule) },
  { path: 'formateurs', loadChildren: () => import('./formateurs/formateurs.module').then(m => m.FormateursModule) },
  { path: 'formations', loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule) },
  { path: 'sessions', loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule) },
  { path: '', redirectTo: 'formations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSpaceRoutingModule { }
