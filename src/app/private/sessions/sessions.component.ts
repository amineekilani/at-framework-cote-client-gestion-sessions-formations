import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { FormationService } from '../../services/formation.service';
import { FormateurService } from '../../services/formateur.service';
import { Session } from '../../models/session';
import { Formation } from '../../models/formation';
import { Formateur } from '../../models/formateur';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent
{
  sessions: Session[] = [];
  formations: Formation[] = [];
  formateurs: Formateur[] = [];
  selectedSession: Session = new Session();
  isEditing = false;
  selectedFormateurIds: number[] = [];

  constructor(
    private sessionService: SessionService,
    private formationService: FormationService,
    private formateurService: FormateurService
  ) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.loadSessions();
    this.loadFormations();
    this.loadFormateurs();
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe(sessions => this.sessions = sessions);
  }

  loadFormations() {
    this.formationService.getFormations().subscribe(formations => this.formations = formations);
  }

  loadFormateurs() {
    this.formateurService.getFormateurs().subscribe(formateurs => this.formateurs = formateurs);
  }

  onSubmit() {
    this.selectedSession.formateurs = this.formateurs.filter(
      f => this.selectedFormateurIds.includes(f.id!)
    );

    if (this.isEditing) {
      this.sessionService.updateSession(this.selectedSession.id!, this.selectedSession)
        .subscribe(() => {
          this.resetForm();
          this.loadSessions();
        });
    } else {
      this.sessionService.addSession(this.selectedSession)
        .subscribe(() => {
          this.resetForm();
          this.loadSessions();
        });
    }
  }

  editSession(session: Session) {
    this.selectedSession = {...session};
    this.selectedFormateurIds = session.formateurs.map(f => f.id!);
    this.isEditing = true;
  }

  deleteSession(id: number) {
    if(confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
      this.sessionService.deleteSession(id).subscribe(() => {
        this.loadSessions();
      });
    }
  }

  resetForm() {
    this.selectedSession = new Session();
    this.selectedFormateurIds = [];
    this.isEditing = false;
  }
}