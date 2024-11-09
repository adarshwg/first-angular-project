import {
  Component,
  Input,
  input,
  computed,
  Output,
  output,
  EventEmitter,
} from '@angular/core';

type User = {
  id:string;
  name:string
  avatar:string
}
//this is the same as the above approach

// interface User {
//   id:string;
//   name:string
//   avatar:string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter<string>()
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); 
  }
}
