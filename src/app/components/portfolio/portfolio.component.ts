import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioItems = [
    {
      name: 'Item 1',
      description: 'Description for Item 1',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg',
      showName: false
    },
    {
      name: 'Item 2',
      description: 'Description for Item 2',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg',
      showName: false
    },
    {
      name: 'Item 1',
      description: 'Description for Item 1',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg',
      showName: false
    },
    {
      name: 'Item 2',
      description: 'Description for Item 2',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg',
      showName: false
    },
    {
      name: 'Item 1',
      description: 'Description for Item 1',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg',
      showName: false
    },
    {
      name: 'Item 2',
      description: 'Description for Item 2',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg',
      showName: false
    },
    {
      name: 'Item 1',
      description: 'Description for Item 1',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/2-4.jpg',
      showName: false
    },
    {
      name: 'Item 2',
      description: 'Description for Item 2',
      image: 'https://wp.shsarker.xyz/edrea-animation/wp-content/uploads/2023/08/1-6.jpg',
      showName: false
    },
    // Add more portfolio items here
  ];

  showName(item: any) {
    item.showName = true;
  }

  hideName() {
    this.portfolioItems.forEach(item => (item.showName = false));
  }
}
