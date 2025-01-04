import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { ListeSessionsComponent } from './liste-sessions/liste-sessions.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeSessionsComponent,
    AddSessionComponent,
    EditSessionComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    FormsModule
  ]
})
export class SessionsModule { }
