import { Component, Input,Output,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
   @Input() name :string | undefined;
}
