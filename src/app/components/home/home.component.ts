import { Component, OnInit } from '@angular/core';
import {PreloaderService} from '../../service/preloader.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showPreloader$: Observable<boolean> | undefined; // Use Observable type

  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    // Subscribe to the showPreloader$ observable
    this.showPreloader$ = this.preloaderService.showPreloader$;

    // Simulate an initialization process
    setTimeout(() => {
      this.preloaderService.hidePreloader();
    }, 3000); // Adjust the delay as needed
  }
}
