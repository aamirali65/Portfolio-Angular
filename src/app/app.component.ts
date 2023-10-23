import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PreloaderService } from '../app/service/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showPreloader$: Observable<boolean> | undefined;

  constructor(private preloaderService: PreloaderService) {}

  ngOnInit() {
    // Show the preloader initially
    this.preloaderService.showPreloader();

    // Simulate an initialization process
    setTimeout(() => {
      this.preloaderService.hidePreloader();
    }, 2000); // Adjust the delay as needed

    // Subscribe to the showPreloader$ observable
    this.showPreloader$ = this.preloaderService.showPreloader$;
  }
}
