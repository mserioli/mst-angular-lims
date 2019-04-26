import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TabComponent } from '../../components/tab/tab.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabbedComponent } from '../../model/tabbed-component';

@Component({
  selector: 'lims-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component extends TabbedComponent implements OnInit {

  testForm: FormGroup;

  constructor(
    _host: TabComponent,
    private formBuilder: FormBuilder,
  ) {
    super(_host);
  }

  ngOnInit() {
    super.ngOnInit();

    this.tab = this.host.tab;
    this.testForm = this.formBuilder.group({
      campo: [this.tab.data.campo, [Validators.required]],
      nome: [this.tab.data.nome, [Validators.required]],
      cognome: [this.tab.data.cognome, [Validators.required]],
    });

    this.testForm.statusChanges.subscribe(() => this.tab.dataChanged = true);
  }
}
