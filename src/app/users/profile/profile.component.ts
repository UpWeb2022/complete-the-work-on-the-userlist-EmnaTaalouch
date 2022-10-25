import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: User;

  constructor(
    private param: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.param.params.subscribe((params) => {
      let id: any = params['id'];
      this.profile = this.userService.users.find(
        (u) => u.id == parseInt(id)
      ) as User;
    });
  }
}
