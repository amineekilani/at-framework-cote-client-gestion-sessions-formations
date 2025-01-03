import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../models/candidat';
import { CandidatService } from '../../services/candidat.service';

@Component({
  selector: 'app-candidats',
  standalone: true,
  imports: [],
  templateUrl: './candidats.component.html',
  styleUrl: './candidats.component.css'
})
export class CandidatsComponent implements OnInit
{
  onFileChange($event: Event)
  {
    throw new Error('Method not implemented.');
  }
  candidats: Candidat[]=[];
  selectedCandidat: Candidat=new Candidat();
  isEditing=false;
  constructor(private candidatService: CandidatService) {}
  ngOnInit()
  {
    this.loadCandidats();
  }
  loadCandidats()
  {
    this.candidatService.getCandidats().subscribe(candidats=>this.candidats=candidats);
  }
  onSubmit()
  {
    if(this.isEditing)
    {
    this.candidatService.updateCandidat(this.selectedCandidat.id!,this.selectedCandidat).subscribe(()=>{
      this.resetForm();
      this.loadCandidats();
    });
    }
    else
    {
      this.candidatService.addCandidat(this.selectedCandidat).subscribe(()=>{
        this.resetForm();
        this.loadCandidats();
      });
    }
  }
  editCandidat(candidat: Candidat)
  {
    this.selectedCandidat={...candidat};
    this.isEditing=true;
  }
  deleteCandidat(id: number)
  {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce candidat ?"))
    {
      this.candidatService.deleteCandidat(id).subscribe(()=>{
        this.loadCandidats();
      });
    }
  }
  resetForm()
  {
    this.selectedCandidat=new Candidat();
    this.isEditing=false;
  }
}