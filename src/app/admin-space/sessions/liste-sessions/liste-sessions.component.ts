import { Component, OnInit } from '@angular/core';
import { Session } from '../../../model/session';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-liste-sessions',
  templateUrl: './liste-sessions.component.html',
  styleUrl: './liste-sessions.component.css'
})
export class ListeSessionsComponent implements OnInit{
  sessions?: Session[];

  constructor(
    private sessionService: SessionService
  ) {}
/*
  deleteSession(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette session?')) {
      this.sessionService.deleteSession(id);
    }
  }
    */

  ngOnInit(): void {
    this.sessions = this.sessionService.getSessions();
    this.sessionService.sessionsEdited.subscribe(
      newSessions => this.sessions = newSessions
    );
  }
}
