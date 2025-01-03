import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatsComponent } from './candidats/candidats.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { FormationsComponent } from './formations/formations.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: 'admin-space', children: [
    { path: '', redirectTo: 'formations', pathMatch: 'full' },
    { path: 'candidats', component: CandidatsComponent },
    { path: 'formateurs', component: FormateursComponent },
    { path: 'formations', component: FormationsComponent },
    { path: 'sessions', component: SessionsComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}