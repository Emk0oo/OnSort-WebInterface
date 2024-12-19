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
      title: "Qu'est-ce que OnSort ?",
      content:
        "OnSort est une application collaborative qui simplifie l'organisation des sorties entre amis. Elle permet de choisir facilement une activité, planifier une date, gérer le budget et partager les paiements grâce à des outils intégrés de sondage et de cagnotte.",
      isOpen: true,
    },
    {
      title: 'Comment fonctionne OnSort ?',
      content: `
        <p>Recherche d'activités : Explorez une sélection d'activités locales (restaurants, cinémas, concerts, etc.).</p>
        <p>Création d'un sondage : Proposez des options pour la date, l'activité ou le budget.</p>
        <p>Invitations : Partagez un lien avec vos amis pour qu'ils votent ou valident leur participation.</p>
      `,
      isOpen: false,
    },
    {
      title: "Quels types d'activités puis-je organiser avec OnSort ?",
      content: `
        <p>Vous pouvez organiser une large gamme d'activités, comme :</p>
        <ul class="list-disc pl-6">
          <li>Des sorties culturelles (musées, expositions).</li>
          <li>Des soirées au restaurant ou au bar.</li>
          <li>Des loisirs en groupe (escape games, bowling).</li>
          <li>Des événements ponctuels (anniversaires, célébrations).</li>
        </ul>
      `,
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
