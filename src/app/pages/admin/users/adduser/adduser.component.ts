import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../model/User';
import { UserApiService } from '../../../../services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  userAddedEvent = new EventEmitter();

  constructor(private userApiService: UserApiService, private router: Router) {}

  ngOnInit() {}

  addUser() {
    this.userApiService.addUser(this.user).subscribe((user) => {
      this.userAddedEvent.emit();
      this.router.navigate(['admin', 'users']);
    });
  }
}
