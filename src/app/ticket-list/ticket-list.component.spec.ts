import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketListComponent } from './ticket-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketListComponent],
      imports: [
        FontAwesomeModule,  // Required for <fa-icon>
        CommonModule  // Required for *ngFor and [ngClass]
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;

    // Mock Ticket Data
    component.tickets = [
      {
      id: 1,
      issue: 'Login issue',
      status: 'Pending',
      statusClass: 'status-pending', // CSS class for status
      statusIcon: faExclamationCircle, // FontAwesome icon for pending status
      priority: 'High',
      priorityClass: 'priority-high', // CSS class for priority
      priorityIcon: faExclamationCircle, // Icon for priority
      responseTime: 2 // Estimated response time in hours
      },
      {
      id: 2,
      issue: 'Payment failure',
      status: 'Resolved',
      statusClass: 'status-resolved',
      statusIcon: faCheckCircle, // FontAwesome icon for resolved status
      priority: 'Medium',
      priorityClass: 'priority-medium',
      priorityIcon: faExclamationCircle,
      responseTime: 4
    }];

    fixture.detectChanges();  // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ticket details in the table', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2);  // Should match mock data length

    const firstRow = rows[0].nativeElement;
    expect(firstRow.textContent).toContain('Login issue');
    expect(firstRow.textContent).toContain('Pending');
    expect(firstRow.textContent).toContain('High');
  });
});
