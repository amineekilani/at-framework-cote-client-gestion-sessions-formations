import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { 
    path: 'public', 
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'admin-space',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}