import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeSessionsComponent } from './liste-sessions/liste-sessions.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AddSessionComponent } from './add-session/add-session.component';

const routes: Routes = [
  {path:"", component: ListeSessionsComponent},
  {path:"add", component:AddSessionComponent},
  {path:"edit/:id", component: EditSessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
