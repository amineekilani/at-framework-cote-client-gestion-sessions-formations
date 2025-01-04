import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeFormationsComponent,
    AddFormationComponent,
    EditFormationComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule,
    FormsModule
  ]
})
export class FormationsModule { }
