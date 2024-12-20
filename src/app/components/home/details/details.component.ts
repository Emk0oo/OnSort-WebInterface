import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  details = [
    {
      image: 'loupe.png',
      title: 'Un accélérateur de découvertes',
      description: 'Faites connaissance avec des lieux et des activités que vous n’auriez pas trouvés autrement.',
    },
    {
      image: 'shop.png',
      title: 'Un boost pour l’économie locale',
      description: 'Nous mettons en avant les restaurants, cinémas et autres activités près de chez vous pour soutenir les commerçants et entreprises locales.',
    },
    {
      image: 'humans.png',
      title: 'Une expérience connectée et humaine',
      description: 'Sortir, c’est avant tout partager des moments avec ceux qui comptent pour vous.',
    },
  ];
}
