import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var $: any; // Import jQuery

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  images = [
    {
      image: 'assets/img/portfolio/img-1.PNG'
    },

    {
      image: 'assets/img/portfolio/img-3.PNG'
    },
    {
      image: 'assets/img/portfolio/img-4.PNG'
    },
    {
      image: 'assets/img/portfolio/img-5.PNG'
    },
      {
      image: 'assets/img/portfolio/img-2.PNG'
    },
    // Add more image objects as needed
  ];


  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    $(this.el.nativeElement).find('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows:false,
      responsive: [
        {
          breakpoint: 769, // Adjust this value as needed
          settings: {
            slidesToShow: 2, // Number of slides to show on this breakpoint
          }
        },
        {
          breakpoint: 576, // Adjust this value as needed
          settings: {
            slidesToShow: 1,
            arrows:false,// Number of slides to show on this breakpoint
          }
        }
        // Add more breakpoints and settings as needed
      ]
    });
  }
}
