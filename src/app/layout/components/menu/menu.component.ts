import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { Comp1Component } from '../../dynamic-components/comp1/comp1.component';
import { Comp2Component } from '../../dynamic-components/comp2/comp2.component';

const knownConponents = {
    comp1: Comp1Component,
    comp2: Comp2Component
  };
@Component({
  selector: 'lims-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  component: string;

  constructor(
    private ts: TabService,
  ) { }

  ngOnInit() {
  }

  addTab(title: string, newTab: boolean, data: string) {
    this.ts.newTab(
      {
        newTab: newTab,
        closeable: true,
        tab:
        {
          title: title,
          tabId: this.ts.currentId,
          data: JSON.parse(data),
          component: knownConponents[this.component],
        }
      },
    );
  }

  back() {
    this.ts.back(1);
  }
}
