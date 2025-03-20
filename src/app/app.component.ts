import { Component, OnInit } from '@angular/core';
import { LogoComponentComponent } from './pages/logo-component/logo-component.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
   /*  templateUrl: './app.component.html', */
    styleUrls: ['./app.component.css'],
    standalone: false,
    template:`
    <app-logo-component *ngIf="showLogoComponent"></app-logo-component>
    <router-outlet *ngIf="!showLogoComponent"></router-outlet>
    `
})
export class AppComponent implements OnInit {
  showLogoComponent = true;
  title = 'RecipeHolder';

  constructor(private router: Router){

  }

  ngOnInit(): void {
  // Show splash screen only for mobile devices (width < 768px)
  if (window.innerWidth < 768) {
    this.showLogoComponent = true;
    setTimeout(() => {
      this.showLogoComponent = false;
      this.router.navigate(['/home']);
    }, 3000);
  }
}
}
