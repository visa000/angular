import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   
  majHeading: string;
  logo: string;
  links:PageLink[];
  constructor() {
    this.links = [{linkText : 'Home',linkStyle: 'nav-link', linkRef: 'home'},
    {linkText : 'Products',linkStyle: 'nav-link', linkRef: 'products'},
    {linkText : 'History',linkStyle: 'nav-link', linkRef: 'history'},
    {linkText : 'Advisors',linkStyle: 'nav-link', linkRef: 'advisors'},
    {linkText : 'Get Quote',linkStyle: 'nav-link', linkRef: 'quote'},
    {linkText : 'Branches',linkStyle: 'nav-link', linkRef: 'branches'},
  ];
    
    this.majHeading = "Coin Insurance";
    this.logo = "assets/images/logo.jpg";
  }
  
  ngOnInit() {
  }

}