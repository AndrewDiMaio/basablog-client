import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/user';
import {UserService} from '../user.service';
import {Observable, Subscription} from 'rxjs';
import {CookieService} from "ngx-cookie-service";
import {AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cookie: String;
  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,private cookieService:CookieService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.cookieService.set("name","test2");
    console.log(this.cookieService.get("name"))
    
    return this.userService.verifyUser(this.user).forEach(result => this.verify());

  }

  verify() {
    return this.router.navigate(['users/verify']);
  }
}