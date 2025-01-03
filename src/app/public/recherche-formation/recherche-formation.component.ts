import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/formation';

@Component({
  selector: 'app-recherche-formation',
  standalone: true,
  imports: [],
  templateUrl: './recherche-formation.component.html',
  styleUrl: './recherche-formation.component.css'
})
export class RechercheFormationComponent implements OnInit
{
  formations: Formation[]=[];
  searchText: string = '';
  constructor(private formationService: FormationService) {}
  ngOnInit()
  {
    this.loadFormations();
  }
  loadFormations()
  {
    this.formationService.getFormations().subscribe(formations=>this.formations=formations);
  }
  searchFormations()
  {
    if (this.searchText.trim())
    {
      const keywords=this.searchText.toLowerCase().split(' ');
      this.formationService.searchFormations(keywords).subscribe(formations=>this.formations=formations);
    }
    else
    {
      this.loadFormations();
    }
  }
}