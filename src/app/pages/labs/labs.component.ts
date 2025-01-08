import { Component, signal } from '@angular/core';
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
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]);
  name = signal('Joss');
  edad = 22;
  disable =true
  img='https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Jhimy',
    age: 24,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
  //funciones (método)
  clickMe(){
    alert('Hola')
  }

  changeHandler(event: Event){
    const input =event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
