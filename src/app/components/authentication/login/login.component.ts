import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '123456';

  constructor(private authService: AuthService, private router : Router) {}

  async login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigateByUrl('user-dashboard');
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
