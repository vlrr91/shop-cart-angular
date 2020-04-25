import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titlePage = 'Angular Shopping Cart';
  urlImage = '/assets/images/home.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
