import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../model/formation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../../services/formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrl: './edit-formation.component.css'
})
export class EditFormationComponent implements OnInit{
  formation?: Formation;

  constructor(
    private activeRoute: ActivatedRoute,
    private formationService: FormationService,
    private router: Router
  ) {}

  editFormation() {
    this.formationService.editFormation(this.formation!);
    this.router.navigate(['/admin-space/formations']);  
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        if (this.formationService.getFormationById(+parametres['id']) !== undefined) {
          this.formation = this.formationService.getFormationById(+parametres['id']);
          console.log(this.formation);
        } else {
          console.log("La formation est introuvable");
        }
      }
    ); 
  }
}
