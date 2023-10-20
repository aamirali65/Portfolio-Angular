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
      name: 'Item 1',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg'
    },
    {
      name: 'Item 2',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg'
    },
    {
      name: 'Item 3',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg'
    },
    {
      name: 'Item 4',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg'
    },
    {
      name: 'Item 5',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg'
    },
    {
      name: 'Item 6',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg'
    },
    {
      name: 'Item 5',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg'
    },
    {
      name: 'Item 6',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg'
    },
    {
      name: 'Item 5',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg'
    },
    {
      name: 'Item 6',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg'
    },
    {
      name: 'Item 5',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg'
    },
    {
      name: 'Item 6',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg'
    },
    // Add more image objects as needed
  ];


  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    $(this.el.nativeElement).find('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768, // Adjust this value as needed
          settings: {
            slidesToShow: 2, // Number of slides to show on this breakpoint
          }
        },
        {
          breakpoint: 576, // Adjust this value as needed
          settings: {
            slidesToShow: 1, // Number of slides to show on this breakpoint
          }
        }
        // Add more breakpoints and settings as needed
      ]
    });
  }
}
