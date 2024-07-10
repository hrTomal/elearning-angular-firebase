import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  email : string = '';
  password : string  = '';

  constructor(private authService: AuthService) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      // Navigate to dashboard or home page
    } catch (error) {
      console.error('Register error', error);
    }
  }
}
