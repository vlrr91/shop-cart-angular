import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appName = 'Shopping Cart';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleCart(): void {
    if (!location.pathname.includes('(popup:cart')) {
      this.router.navigate([{ outlets: { popup: ['cart'] } }])
        .then(() => console.log('open popup'));
    } else {
      this.router.navigate([{outlets: {popup: null }}])
        .then(() => console.log('close popup'));
    }
  }
}
