import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CorreoComponent } from './correo/correo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CorreoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto';
}
