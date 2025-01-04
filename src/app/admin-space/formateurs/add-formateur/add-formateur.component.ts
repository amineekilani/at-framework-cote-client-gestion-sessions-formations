import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../../services/formateur.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrl: './add-formateur.component.css'
})
export class AddFormateurComponent {
  constructor(
    private formateurService:FormateurService,
    private router:Router
  ){}
  addFormateur(f:NgForm){
    this.formateurService.addFormateur(
      f.value.nom,
      f.value.prenom,
      f.value.email,
      f.value.tel,
      f.value.numCIN,
      f.value.photo,
      f.value.cv,
      f.value.specialites.split(',')
    );
    this.router.navigate(["/admin-space/formateurs"])
  }
}
