import { Component, OnInit } from '@angular/core';
import { Formation } from '../../models/formation';
import { FormationService } from '../../services/formation.service';
import { NavbarComponent } from "../../public/navbar/navbar.component";

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent implements OnInit
{
  formations: Formation[]=[];
  selectedFormation: Formation=new Formation();
  isEditing=false;
  newTag: string="";
  constructor(private formationService: FormationService) {}
  ngOnInit()
  {
    this.loadFormations();
  }
  loadFormations()
  {
    this.formationService.getFormations().subscribe(formations=>this.formations=formations);
  }
  onSubmit()
  {
    if(this.isEditing)
    {
      this.formationService.updateFormation(this.selectedFormation.id!,this.selectedFormation).subscribe(()=>{
        this.resetForm();
        this.loadFormations();
      });
    }
    else
    {
      this.formationService.addFormation(this.selectedFormation).subscribe(()=>{
        this.resetForm();
        this.loadFormations();
      });
    }
  }
  addTag()
  {
    if(this.newTag.trim())
    {
      this.selectedFormation.tags.push(this.newTag.trim());
      this.newTag="";
    }
  }
  removeTag(index: number)
  {
    this.selectedFormation.tags.splice(index,1);
  }

  editFormation(formation: Formation)
  {
    this.selectedFormation={...formation};
    this.isEditing=true;
  }
  deleteFormation(id: number)
  {
    if(confirm("Êtes-vous sûr de vouloir supprimer cette formation ?"))
    {
      this.formationService.deleteFormation(id).subscribe(()=>{
        this.loadFormations();
      });
    }
  }
  resetForm()
  {
    this.selectedFormation=new Formation();
    this.isEditing=false;
    this.newTag= "";
  }
}