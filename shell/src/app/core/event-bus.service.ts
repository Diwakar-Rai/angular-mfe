import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventBusService {
  private loginSubject = new Subject();
  $login = this.loginSubject.asObservable();
  emitLogin(data: any) {
    this.loginSubject.next(data);
  }
}
