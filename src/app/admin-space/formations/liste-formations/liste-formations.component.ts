import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../model/formation';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrl: './liste-formations.component.css'
})
export class ListeFormationsComponent implements OnInit{
  formations?: Formation[];
  constructor(
    private formationService: FormationService
  ){}

  deleteFormation(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation?')) {
      this.formationService.deleteFormation(id);
    }
  }

  ngOnInit(): void {
    this.formations = this.formationService.getFormations();
    this.formationService.formationsEdited.subscribe(
      newFormations => this.formations = newFormations
    );
  } 
  }
