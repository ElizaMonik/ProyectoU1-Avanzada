import { Component } from '@angular/core';

@Component({
  selector: 'app-correo',
  standalone: true,
  imports: [],
  templateUrl: './correo.component.html',
  styleUrl: './correo.component.css',
})
export class CorreoComponent {
  escuela: string = 'pepitos duros';
  fuerzasArmadas: string = 'fuerzas armadas';
  plan: string = 'fin de semana';
  sesiones: number = 23;
  nivelBack: string = 'nivel calculado';
  valorBackend: string = 'valor backend';
  numeroCuenta: string = '121321534';
  imagenUrl: string = ''; // Aquí se almacena la URL de la imagen subida

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}