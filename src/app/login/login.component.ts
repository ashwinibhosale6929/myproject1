import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('loginForm') loginForm!: ElementRef<HTMLFormElement>;

  ngAfterViewInit() {
    if (this.loginForm) {
      this.loginForm.nativeElement.addEventListener('submit', async (event: Event) => {
        event.preventDefault();

        const email = (this.loginForm.nativeElement.querySelector('#email') as HTMLInputElement).value;
        const password = (this.loginForm.nativeElement.querySelector('#password') as HTMLInputElement).value;

        const isAuthenticated = await this.authenticateUser(email, password);
        if (isAuthenticated) {
          alert('Login successful!');
        } else {
          alert('Invalid credentials, please try again.');
        }
      });
    }
  }

  // Authentication function
  async authenticateUser(email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch('https://your-api-url.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      return response.ok; // Return true if authentication succeeds
    } catch (error) {
      console.error('Error during authentication:', error);
      return false;
    }
  }
  login(){
    alert('Login successful!');
  }
}