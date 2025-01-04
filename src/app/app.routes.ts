import { Routes } from '@angular/router';
import { AdminSpaceModule } from './admin-space/admin-space.module';

export const routes: Routes = [
    {
        path: 'admin-space',
        loadChildren: () => import('./admin-space/admin-space.module').then(m=> m.AdminSpaceModule)
    },
    {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(m=> m.PublicModule)
    },
    {
        path: '',
        redirectTo: '/public',
        pathMatch: 'full'
    }
];
