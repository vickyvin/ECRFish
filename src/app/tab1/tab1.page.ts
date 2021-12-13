import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route:Router) {}
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  logout() {
    
      this.route.navigate(['login']);
   
    // this.authService.logout();
    
  }
}
