import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  noHome() {
    if (this.router.url === '/home') {
      return false;
    } else {
      return true;
    }
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
