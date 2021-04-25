import { Component } from '@angular/core';
import { AuthenticationService } from '../../pages/login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(public readonly authenticationService: AuthenticationService) {}
}
