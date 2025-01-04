import { Component } from '@angular/core';
import { CandidatService } from '../../../services/candidat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrl: './add-candidat.component.css'
})
export class AddCandidatComponent {
  constructor(
    private candidatService:CandidatService,
    private router:Router
  ){}
  addCandidat(f:NgForm){
    this.candidatService.addCandidat(
      f.value.nom,
      f.value.prenom,
      f.value.email,
      f.value.numeroCarteIdentite,
      f.value.photo,
      f.value.motDePasse
    );
    this.router.navigate(["/admin-space/candidats"])
  }
}
