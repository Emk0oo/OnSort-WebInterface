import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this


@Component({
  selector: 'app-navbar',
  standalone: true, // If using standalone components
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuBurgerOpen = false;

  toggleMenuBurger() {
    this.isMenuBurgerOpen = !this.isMenuBurgerOpen;
    console.log('Menu open:', this.isMenuBurgerOpen);
  }
}
