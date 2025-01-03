import { Component } from '@angular/core';
import { Formation } from '../../models/formation';
import { Session } from '../../models/session';
import { Candidat } from '../../models/candidat';
import { SessionService } from '../../services/session.service';
import { FormationService } from '../../services/formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-formation',
  standalone: true,
  imports: [],
  templateUrl: './details-formation.component.html',
  styleUrl: './details-formation.component.css'
})
export class DetailsFormationComponent
{
  formation: Formation | null = null;
  sessions: Session[] = [];
  newCandidat: Candidat = new Candidat();
  selectedSessionId: number | null = null;
  window: any;
  constructor
  (
    private route: ActivatedRoute,
    private formationService: FormationService,
    private sessionService: SessionService
  ) {}
  ngOnInit()
  {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.loadFormation(id);
  }
  loadFormation(id: number)
  {
    this.formationService.getFormation(id).subscribe(formation=>{
      this.formation=formation;
      this.loadSessions(id);
    });
  }
  loadSessions(formationId: number)
  {
    this.sessionService.getSessionsByFormation(formationId).subscribe(sessions => {
    this.sessions = sessions;
    });
  }
  inscrireCandidat(sessionId: number)
  {
    if (!this.sessions.find(s=>s.id===sessionId)?.candidats || this.sessions.find(s=>s.id===sessionId)!.candidats.length>=15)
    {
      return;
    }
    this.sessionService.inscriptionSession(sessionId,this.newCandidat).subscribe(()=>{
      this.loadSessions(this.formation!.id!);
      this.newCandidat=new Candidat();
      this.selectedSessionId=null;
    });
  }
}