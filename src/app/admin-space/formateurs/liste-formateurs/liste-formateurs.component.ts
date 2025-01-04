import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../../services/formateur.service';
import { Formateur } from '../../../model/formateur';


@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrl: './liste-formateurs.component.css'
})
export class ListeFormateursComponent implements OnInit{
   
  formateurs?: Formateur[];

  constructor(
    private formateurService: FormateurService
  ) {}

  deleteFormateur(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce formateur?')) {
      this.formateurService.deleteFormateur(id);
    }
  }

  ngOnInit(): void {
    this.formateurs = this.formateurService.getFormateurs();
    this.formateurService.formateursEdited.subscribe(
      newFormateurs => this.formateurs = newFormateurs
    );
  }
  
}
