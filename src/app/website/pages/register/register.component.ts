import { Observable } from 'rxjs';
import { OnExit } from './../../../guards/exit.guard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnExit {
  constructor() {}
  onExit() {
    const rta = confirm('Logica desde el compo ,estas seguro de salir');
    return rta;
  }
}
