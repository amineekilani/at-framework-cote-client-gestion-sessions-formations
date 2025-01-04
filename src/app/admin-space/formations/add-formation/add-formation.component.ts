import { Component } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrl: './add-formation.component.css'
})
export class AddFormationComponent {
  constructor(
    private formationService:FormationService,
    private router:Router
  ){}
  addFormation(f:NgForm){
    this.formationService.addFormation(
      f.value.titre,
      f.value.description,
      f.value.chargeHoraire,
      f.value.programme,
      f.value.niveauDifficulte,
      f.value.motsCles.split(','),
      f.value.categories.split(',')
    );
    this.router.navigate(["/admin-space/formations"])
  }
}
