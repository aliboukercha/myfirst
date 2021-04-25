import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/User';
import { UserApiService } from '../../../services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewUserComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  userDeletedEvent = new EventEmitter();

  constructor(private userApiService: UserApiService, private router: Router) {}

  ngOnInit() {}

  deleteUser() {
    this.userApiService.deleteUser(this.user.id).subscribe((user) => {
      this.userDeletedEvent.emit();
      this.router.navigate(['admin', 'users']);
    });
  }
}
