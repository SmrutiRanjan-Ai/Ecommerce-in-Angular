import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css']
})

/** Generate Home Slider */
export class HomesliderComponent implements OnInit {
  home_images_slider =[
    {
      title: 'At the Beach',
      url:
        'https://mobirise.com/extensions/commercem4/assets/images/1.jpg'
    },
    {
      title: 'At the Forest',
      url:
        'https://mobirise.com/extensions/commercem4/assets/images/gallery05.jpg'
    },
    {
      title: 'At the Forest',
      url:
        'https://mobirise.com/extensions/commercem4/assets/images/gallery00.jpg'
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
