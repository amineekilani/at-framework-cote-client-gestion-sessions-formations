import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';

const routes: Routes = [
  {path:"", component: ListeFormationsComponent},
  {path:"add", component:AddFormationComponent},
  {path:"edit/:id", component: EditFormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
