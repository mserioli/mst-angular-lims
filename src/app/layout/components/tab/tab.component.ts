import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { LimsTab } from '../../model/lims-tab';

@Component({
  selector: 'lims-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterViewInit {

  @Input() tab: LimsTab;
  dynamicComponent: any;
  @ViewChildren('input') contentChildren: QueryList<any>;

  constructor() { }

  ngOnInit() {
    this.dynamicComponent = this.tab ? this.tab.component : undefined;
  }

  ngAfterViewInit(): void {
    this.contentChildren.changes.subscribe((r) => {
      console.log(r);
    });
  }
}
