import {
  Directive, TemplateRef, ViewContainerRef, Input, OnInit, ContentChildren,
  QueryList, ViewChildren, ElementRef, AfterViewInit
} from '@angular/core';
import { TabbedComponent } from '../model/tabbed-component';
import { CompConfig } from '../model/comp-config';
import { ConfigService } from '../services/config.service';

@Directive({
  selector: '[limsApplyConfig]'
})
export class ApplyConfigDirective implements AfterViewInit {

  config: CompConfig[];
  compName: string;

  // @ViewChildren('*') contentChildren: QueryList<any>;

  constructor(
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
    private el: ElementRef,
    private cs: ConfigService,
  ) { }

  @Input() set limsApplyConfig(compName: string) {
    this.compName = compName;
  }

  ngAfterViewInit(): void {
    // this.viewContainer.clear();
    this.cs.getConfig(this.compName).subscribe(c => {
    //  this.viewContainer.createEmbeddedView(this.templateRef);
      console.log(this.el.nativeElement);
      this.config = c;
      this.config.forEach(cfg => {
         if (this.el.nativeElement.querySelectorAll) {
           const inputCollection = this.el.nativeElement.querySelectorAll(cfg.controlName);
           inputCollection.forEach(n => {
             if (n.readOnly !== undefined) {
               n.readOnly = !cfg.isEnabled;
             }
           });
         }
        // this.contentChildren.forEach(cc => console.log(cc));
      });
    });
  }
}
