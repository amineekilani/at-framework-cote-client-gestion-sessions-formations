import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';

const routes: Routes = [
  {path:"", component: ListeCandidatsComponent},
  {path:"add", component:AddCandidatComponent},
  {path:"edit/:id", component: EditCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatsRoutingModule { }
