import { Component } from '@angular/core';
import { PresentationComponent } from '../../components/home/presentation/presentation.component';
import { DetailsComponent } from '../../components/home/details/details.component';
@Component({
  selector: 'app-home',
  imports: [PresentationComponent, DetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
