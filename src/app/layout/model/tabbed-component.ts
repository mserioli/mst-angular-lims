import { LimsTab } from './lims-tab';
import { TabComponent } from '../components/tab/tab.component';
import { CompConfig } from './comp-config';
import { OnInit, Component, ViewChildren, QueryList } from '@angular/core';

@Component({

})
export class TabbedComponent implements OnInit {

  tab: LimsTab;
  host: TabComponent;

  constructor(
    private _host: TabComponent,
  ) {
    this.host = _host;
  }

  ngOnInit(): void {
    console.log('super');
  }
}
