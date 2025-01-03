import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../models/formateur';
import { FormateurService } from '../../services/formateur.service';

@Component({
  selector: 'app-formateurs',
  standalone: true,
  imports: [],
  templateUrl: './formateurs.component.html',
  styleUrl: './formateurs.component.css'
})
export class FormateursComponent implements OnInit
{
  formateurs: Formateur[]=[];
  selectedFormateur: Formateur=new Formateur();
  isEditing = false;
  constructor(private formateurService: FormateurService) {}
  ngOnInit()
  {
    this.loadFormateurs();
  }
  loadFormateurs()
  {
    this.formateurService.getFormateurs().subscribe(formateurs=>this.formateurs=formateurs);
  }
  onSubmit()
  {
    if(this.isEditing)
    {
      this.formateurService.updateFormateur(this.selectedFormateur.id!,this.selectedFormateur).subscribe(()=>{
        this.resetForm();
        this.loadFormateurs();
      });
    }
    else
    {
      this.formateurService.addFormateur(this.selectedFormateur).subscribe(()=>{
        this.resetForm();
        this.loadFormateurs();
      });
    }
  }
  editFormateur(formateur: Formateur)
  {
    this.selectedFormateur={...formateur};
    this.isEditing=true;
  }
  deleteFormateur(id: number)
  {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce formateur ?"))
    {
      this.formateurService.deleteFormateur(id).subscribe(()=>{
        this.loadFormateurs();
      });
    }
  }
  addSpecialite()
  {
    this.selectedFormateur.specialites.push('');
  }
  removeSpecialite(index: number)
  {
    this.selectedFormateur.specialites.splice(index,1);
  }
  resetForm()
  {
    this.selectedFormateur=new Formateur();
    this.isEditing=false;
  }
}