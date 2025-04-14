import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faSpinner, faCheckCircle, faTimesCircle, faExclamationTriangle, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket-list',
  imports: [CommonModule, FontAwesomeModule,],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css',
})
export class TicketListComponent {

  tickets = [
    { id: 1, issue: 'Login issue', status: 'Pending', statusIcon: faClock, statusClass: 'status-pending', priority: 'High', priorityIcon: faArrowUp, priorityClass: 'priority-high', responseTime: 2 },
    { id: 2, issue: 'Payment failure', status: 'In Progress', statusIcon: faSpinner, statusClass: 'status-in-progress', priority: 'Medium', priorityIcon: faArrowDown, priorityClass: 'priority-medium', responseTime: 4 },
    { id: 3, issue: 'Bug in dashboard', status: 'Resolved', statusIcon: faCheckCircle, statusClass: 'status-resolved', priority: 'Low', priorityIcon: faArrowDown, priorityClass: 'priority-low', responseTime: 6 },
    { id: 4, issue: 'App crash', status: 'Closed', statusIcon: faTimesCircle, statusClass: 'status-closed', priority: 'Urgent', priorityIcon: faExclamationTriangle, priorityClass: 'priority-urgent', responseTime: 1 }
  ];
}