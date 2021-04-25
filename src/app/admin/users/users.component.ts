import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserApiService } from '../../services/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  selectedUser: User;
  action: string;

  constructor(
    private userApiService: UserApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.userApiService.getUsers().subscribe((users) => (this.users = users));

    this.activatedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];
      const selectedUserId = params['id'];
      if (selectedUserId) {
        this.selectedUser = this.users.find(
          (user) => user.id === +selectedUserId
        );
      }
    });
  }

  viewUser(id: number) {
    this.router.navigate(['admin', 'users'], {
      queryParams: { id, action: 'view' },
    });
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], {
      queryParams: { action: 'add' },
    });
  }
}
