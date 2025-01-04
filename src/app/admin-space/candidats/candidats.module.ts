import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatsRoutingModule } from './candidats-routing.module';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeCandidatsComponent,
    AddCandidatComponent,
    EditCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatsRoutingModule,
    FormsModule
  ]
})
export class CandidatsModule { }
