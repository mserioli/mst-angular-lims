import { Injectable } from '@angular/core';
import { TabAction } from '../model/tab-action';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private tabActions = new Subject<TabAction>();
  private _currentId = 0;

  constructor() { }

  get tabsObservable(): Observable<TabAction> {
    return this.tabActions.asObservable();
  }

  newTab(tabAction: TabAction) {
    this._currentId++;
    this.tabActions.next(tabAction);
  }

  back(steps: number) {
    this.tabActions.next({
      back: steps
    });
  }

  get currentId() {
    return this._currentId;
  }
}
