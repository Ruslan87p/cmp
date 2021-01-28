import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appChip]'
})
export class ChipDirective implements OnInit  {

  constructor(
    private temp: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    this.view.createEmbeddedView(this.temp);
  }

}
