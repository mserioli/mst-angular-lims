import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompConfig } from '../model/comp-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfig(compName: string): Observable<CompConfig[]> {
    return of([{
      componentName: undefined,
      controlName: '#nome',
      isEnabled: false,
      isVisible: true,
    }, {
      componentName: undefined,
      controlName: '#cognome',
      isEnabled: false,
      isVisible: false,
    }]);
  }
}
