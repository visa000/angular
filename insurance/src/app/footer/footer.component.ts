import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  follow:string;
  links: PageLink[] = [
    {linkText: 'Twitter', linkStyle: 'fa fa-2x fa-twitter'},
    {linkText: 'Facebook', linkStyle: 'fa fa-2x fa-facebook'},
    {linkText: 'Instagram', linkStyle: 'fa fa-2x fa-instagram'}
  ];

  constructor() { 
    this.follow = "follow us on:";
  }

  ngOnInit() {
  }

}
