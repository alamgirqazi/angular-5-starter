import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output
} from '@angular/core';

import { AsideNavigationService } from '../../services/asideNavigation.Service';
import { Router } from '@angular/router';

// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'app-leftsidemenu',
  templateUrl: './leftsidemenu.component.html',
  styleUrls: ['./leftsidemenu.component.css']
})
export class LeftsidemenuComponent implements OnInit {
  @Output()
  outputEvent = new EventEmitter();
  toogle: boolean;
  searchString: string;
  isPopup: boolean;
  username: string;
  isClosedNav: boolean;
  settingIconOpen: boolean;
  constructor(
    public router: Router,
    private _asideNavigationService: AsideNavigationService
  ) {
    this.toogle = true;
    this.isPopup = false;
    this.isClosedNav = true;
    // this.isClosedNav = false;
    this.searchString = '';
  }

  ngOnInit() {
    this.toggleMenu(true);
  }

  clopse() {
    this.toogle = !this.toogle;
  }

  searching(search: string) {
    this.searchString = search;
  }

  // This makes sure that the aside is closed when Init

  toggleMenu(init?) {
    if (init) {
      this.isClosedNav = true;
      // this.isClosedNav = false;
    } else {
      this.isClosedNav = !this.isClosedNav;
    }
    this.outputEvent.emit();
    this._asideNavigationService.changeMessage(this.isClosedNav);
  }
  togglePopup(event) {
    event.stopPropagation();
    this.isPopup = !this.isPopup;
  }
  /**
   * @HostListener on document  click to make left nav bar pop close
   * */
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.isPopup) {
      this.isPopup = false;
    }
  }

  logout() {
    console.log('logout!');
    localStorage.removeItem('token');
    // localStorage.removeItem('data');
    this.router.navigate(['/login']);
  }
}
