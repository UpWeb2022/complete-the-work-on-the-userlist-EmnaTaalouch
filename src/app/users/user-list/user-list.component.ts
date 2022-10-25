import { User } from '../../core/model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public list: User[];
  public message: string = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.list = this.userService.users;
  }

  onClickCategorie(catgorie: string) {
    this.list = this.userService.users; // initialiser liste
    let filtred: User[] = this.userService.users;
    this.message = '';
    if (catgorie !== 'all') {
      filtred = this.list.filter((p) => p.category === catgorie);
      this.list = filtred;
      this.message = catgorie + ': ' + filtred.length;
    }
  }
}
