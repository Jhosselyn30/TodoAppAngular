import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  person = signal({
    name: 'Jhimy',
    age: 19,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  })

  ColorCtrl = new FormControl();

  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });

  nameCtrl = new FormControl('Joss', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3) //tamaño min de un nombre (3char)
    ]
  });

  constructor(){
    this.ColorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }
  //funciones (método)
  clickMe(){
    alert('Hola')
  }
  changeName(event: Event){
    const input =event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState =>{
      return {
        ...prevState,
        name: newValue
      }
    });
  }
  newValue: number = 0; // Variable para almacenar el número

  changeAge(event: Event){
    const input =event.target as HTMLInputElement;
    const newValue = input.value;

    this.person.update(prevState =>{
        return {
          ...prevState,
          age: parseInt(newValue)
        }
    } )
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
