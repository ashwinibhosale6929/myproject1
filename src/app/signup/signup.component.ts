import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  onSubmit() {
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long!';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    // Simulate API call (Replace this with actual API call)
    console.log('User Registered:', { fullName: this.fullName, email: this.email });

    // Clear form and error message
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';
    alert('Sign-Up Successful!');
  }
}

