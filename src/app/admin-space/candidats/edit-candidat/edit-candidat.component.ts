import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../../../services/candidat.service';
import { Candidat } from '../../../model/candidat';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrl: './edit-candidat.component.css'
})
export class EditCandidatComponent implements OnInit{
  candidat?: Candidat;

  constructor(
    private activeRoute: ActivatedRoute,
    private candidatService: CandidatService,
    private router: Router
  ) {}

  editCandidat() {
    
    this.candidatService.editCandidat(this.candidat!);
    this.router.navigate(['/admin-space/candidats']); 
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        if (this.candidatService.getCandidatById(+parametres['id']) !== undefined) {
          this.candidat = this.candidatService.getCandidatById(+parametres['id']);
          console.log(this.candidat);
        } else {
          console.log("Le candidat est introuvable");
        }
      }
    );
  }
}
