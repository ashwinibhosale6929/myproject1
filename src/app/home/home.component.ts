import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketListComponent } from "../ticket-list/ticket-list.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, TicketListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    newElement(): void {
      const li: HTMLLIElement = document.createElement("li");
  const inputElement = document.getElementById("myInput") as HTMLInputElement;
  

  if (!inputElement) {
    console.error("Input element not found");
    return;
  }

  const inputValue: string = inputElement.value;
  const t: Text = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    const ulElement = document.getElementById("myUL");
    if (ulElement) {
      ulElement.appendChild(li);
    } else {
      console.error("UL element not found");
    }
  }

  inputElement.value = ""; // Clear input after adding the item
}

  } 
