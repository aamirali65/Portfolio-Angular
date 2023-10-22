import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  private showPreloaderSubject = new BehaviorSubject<boolean>(true);
  showPreloader$: Observable<boolean> = this.showPreloaderSubject.asObservable();

  showPreloader() {
    this.showPreloaderSubject.next(true);
  }

  hidePreloader() {
    this.showPreloaderSubject.next(false);
  }
}
