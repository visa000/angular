import { Component, OnInit, Input } from '@angular/core';
import { PageLink } from '../page-link';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() linksFromParent:PageLink[];

  showLogin = true;
  showLogout = false;
  constructor(private service:ComponentCommunicationService) { }

  ngOnInit() {
    this.service.message.subscribe(status => {
    if (status === 'loggedin') {
      this.showLogout = true;
      this.showLogin = false;
    } else if (status === 'loggedout') {
      this.showLogin = true;
      this.showLogout = false;
    }
  });
    
  }


}
