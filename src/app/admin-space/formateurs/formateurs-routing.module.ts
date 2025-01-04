import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';

const routes: Routes = [
  {path:"", component: ListeFormateursComponent},
  {path:"add", component:AddFormateurComponent},
  {path:"edit/:id", component: EditFormateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateursRoutingModule { }
