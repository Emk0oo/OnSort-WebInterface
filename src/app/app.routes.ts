import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; // Importation du composant Home

export const routes: Routes = [
  {
    path: '', // Chemin racine correspond à localhost:3000/
    component: HomeComponent,
  },
  // Vous pouvez ajouter d'autres routes ici
];
