import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { InputComponent } from '../../Components/input/input.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, InputComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
