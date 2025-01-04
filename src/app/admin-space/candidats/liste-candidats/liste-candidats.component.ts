import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../../model/candidat';
import { CandidatService } from '../../../services/candidat.service';

@Component({
  selector: 'app-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrl: './liste-candidats.component.css'
})
export class ListeCandidatsComponent implements OnInit{
  candidats?:Candidat[];

  constructor(
    private candidatService:CandidatService
  ){}

  deleteCandidat(id:number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce candidat?"))
      {this.candidatService.deleteCandidat(id)}   
  }
  ngOnInit(): void {
    this.candidats=this.candidatService.getCandidats();
    this.candidatService.candidatsEdited.subscribe(
      newCandidats=> this.candidats=newCandidats
    )   
  }
}
