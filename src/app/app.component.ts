import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { fadeInAnimation } from './shared/animations';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
})
export class AppComponent {
  title = 'SideNav Boilerplate';
  logo = 'assets/icon.png';

  private rawPages = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/showcase",
    "/terms-and-conditions",
    "/privacy-policy"
  ];

  constructor(public router: Router, private themeService: ThemeService) {
    this.themeService.initializeTheme();
  }

  prepareRoute(outlet: RouterOutlet) {
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    // return outlet.isActivated ? outlet.activatedRoute : '';
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url : null;
  }

  checkRawPages(url: string) {
    return !this.rawPages.some(page => url.includes(page) === true);
  }
}
