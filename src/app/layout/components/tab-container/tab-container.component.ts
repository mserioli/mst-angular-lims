import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { TabComponent } from '../tab/tab.component';
import { UiTab } from '../../model/ui-tab';

@Component({
  selector: 'lims-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  uiTabs: UiTab[] = [];
  currentTab: UiTab;
  // limsTabs: LimsTab[] = [];
  @ViewChild('tabContent', { read: ViewContainerRef }) vc: ViewContainerRef;
  tabComponentFactory: ComponentFactory<TabComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private ts: TabService,
  ) { }

  ngOnInit() {
    this.tabComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TabComponent);
    this.ts.tabsObservable.subscribe(ta => {
      if (ta.back) {
        this.currentTab.limsTabs.splice(this.currentTab.limsTabs.length - ta.back);
      } else {
        let ut: UiTab;
        if (ta.newTab || this.uiTabs.length <= 0) {
          ut = new UiTab(ta.closeable, true);
          this.currentTab = ut;
          this.uiTabs.push(ut);
        }
        this.currentTab.limsTabs.push(ta.tab);
      }
      this.selectUiTab(this.currentTab);
    });
  }

  selectUiTab(ut: UiTab) {
    this.currentTab = ut;
    this.uiTabs.forEach(utt => utt.active = false);
    this.currentTab.active = true;
    this.showTab(ut);
  }

  private showTab(ut: UiTab) {
    this.vc.clear();
    const ref = this.vc.createComponent(this.tabComponentFactory);
    const tc = ref.instance;
    tc.tab = ut.currentLimTab;
  }

  closeTab(ut: UiTab) {
    const ix = this.uiTabs.indexOf(ut);
    if (ut.limsTabs.filter(t => t.dataChanged).length > 0) {
      alert('ocio!');
    }
    this.uiTabs.splice(ix, 1);
    this.showTab(this.uiTabs[0]);
  }
}
