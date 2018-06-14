import { ITile } from './../../tile/tile.component';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  headerText: string;
  skillInformation: Array<ITile> = [
    {
      name: "HTML",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    },
    {
      name: "CSS",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/css.png"
    },
    {
      name: "Angular 2",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/angular2.png"
    },
  ];
  constructor() {
    this.headerText = "We are Learning";
  }

  ngOnInit() {
  }

}
