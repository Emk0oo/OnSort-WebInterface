import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor() {}

  isMenuBurgerOpen = false;

  toggleMenuBurger() {
    this.isMenuBurgerOpen = !this.isMenuBurgerOpen;
    console.log('this.isMenuBurgerOpen', this.isMenuBurgerOpen);
  }
}
