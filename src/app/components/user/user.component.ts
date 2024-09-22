import {
  Component,
  Input,
  Output,
  EventEmitter,
  input,
  computed,
  output,
} from '@angular/core';
import { User } from '../../models/user.model';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // select = output<string>();
  @Output() select = new EventEmitter();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
