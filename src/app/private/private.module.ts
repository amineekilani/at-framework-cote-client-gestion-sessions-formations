import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { FormationsComponent } from './formations/formations.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { SessionsComponent } from './sessions/sessions.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CandidatsComponent,
    FormateursComponent,
    FormationsComponent,
    SessionsComponent
  ]
})
export class PrivateModule {}