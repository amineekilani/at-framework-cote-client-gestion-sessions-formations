import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateursRoutingModule } from './formateurs-routing.module';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeFormateursComponent,
    AddFormateurComponent,
    EditFormateurComponent
  ],
  imports: [
    CommonModule,
    FormateursRoutingModule,
    FormsModule
  ]
})
export class FormateursModule { }
