import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../../model/formateur';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from '../../../services/formateur.service';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrl: './edit-formateur.component.css'
})
export class EditFormateurComponent implements OnInit{
  formateur?: Formateur;

  constructor(
    private activeRoute: ActivatedRoute,
    private formateurService: FormateurService,
    private router: Router
  ){}
  editFormateur() {
    
    this.formateurService.editFormateur(this.formateur!);
    this.router.navigate(['/admin-space/formateurs']); 
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        if (this.formateurService.getFormateurById(+parametres['id']) !== undefined) {
          this.formateur = this.formateurService.getFormateurById(+parametres['id']);
          console.log(this.formateur);
        } else {
          console.log("Le formateur est introuvable");
        }
      }
    );    
  }
}
