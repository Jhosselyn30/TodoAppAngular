import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome= 'Holaaaaa';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ];
  name = 'Joss';
  edad = 22;
  disable =true
  img='https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Jhimy',
    age: 24,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
}
