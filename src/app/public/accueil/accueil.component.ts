import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/formation';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit
{
  categories: string[]=[];
  constructor(private formationService: FormationService) {}
  ngOnInit()
  {
    this.formationService.getFormations().subscribe(formations=>{
      this.categories=[...new Set(formations.map(f=>f.categorie))];
    });
  }
}