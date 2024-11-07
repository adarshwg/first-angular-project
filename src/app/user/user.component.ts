import { Component, signal ,computed} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {  

  //this is a signal - whenever any change is detected in it, angular 
  //will be notified and all the usages as well as the UI will be updated.

  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)

  //this function is triggered on selecting user
  
  onSelectUser(){
    const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
    // this is how we update a signal
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
