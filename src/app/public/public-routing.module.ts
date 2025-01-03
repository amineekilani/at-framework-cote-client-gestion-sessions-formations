import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';

const routes: Routes=[
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'formations', component: RechercheFormationComponent },
  { path: 'formations/:id', component: DetailsFormationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}