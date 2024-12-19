import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faqs = [
    {
      title: 'D’où proviennent nos produits reconditionnés ?',
      content:
        'Tous nos produits sont issus du marché français. Ils proviennent de particuliers, de l’opérateur Orange, ou encore d’entreprises françaises. Ceci nous permet d’assurer à nos clients des produits en totale conformité avec les normes de notre pays, mais aussi de limiter significativement l’empreinte environnementale liée au transport des produits. Tous les produits que nous récupérons sont ensuite entièrement contrôlés et reconditionnés dans nos ateliers de Caen et de Toulouse. Une économie circulaire 100% française qui participe à la création d’emplois locaux et à la valorisation du Made in France !',
      isOpen: true,
    },
    {
      title: 'Que couvre notre garantie de 2 ans ?',
      content: 'Contenu de la deuxième question.',
      isOpen: false,
    },
    {
      title: 'Comment nous contacter en cas de besoin ?',
      content: 'Contenu de la troisième question.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
