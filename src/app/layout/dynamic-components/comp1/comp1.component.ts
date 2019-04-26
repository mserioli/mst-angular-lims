import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { TabComponent } from '../../components/tab/tab.component';
import { LimsTab } from '../../model/lims-tab';
import { TabService } from '../../services/tab.service';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'lims-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges {

  tab: LimsTab;

  constructor(
    private host: TabComponent,
    private ts: TabService,
  ) { }

  ngOnInit() {
    this.tab = this.host.tab;
  }

  ngOnChanges(sc: SimpleChanges) {
    console.log(sc);
  }

  debug() {
    console.log(this.tab);
  }

  nuovo(newTab: boolean) {
    this.ts.newTab({
      closeable: true,
      newTab: newTab,
      tab: {
        component: Comp2Component,
        data: Object.assign(new Object(), this.tab.data, {ts: new Date()}),
        title: 'Nuovo da tab',
      }
    });
  }
}
