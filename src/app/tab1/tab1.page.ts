import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
}
