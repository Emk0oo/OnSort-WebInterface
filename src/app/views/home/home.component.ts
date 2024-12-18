import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PresentationComponent } from '../../components/home/presentation/presentation.component';
import { DetailsComponent } from '../../components/home/details/details.component';
import { PartenairesComponent } from '../../components/home/partenaires/partenaires.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DownloadComponent } from '../../components/home/download/download.component';

@Component({
  selector: 'app-home',
  imports: [PresentationComponent, DetailsComponent, PartenairesComponent, DownloadComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
