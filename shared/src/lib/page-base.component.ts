import { Component, OnInit } from '@angular/core';
import { PageComponent } from './models';

@Component({
  template: '',
  host: {
    'class': 'page-container',
    '[class.as-flex]': 'displayFlex',
    '[class.align-center]': 'alignCenter',
    '[class.has-overflow]': 'hasOverflow',
    '[attr.id]': 'pageId'
  }
})
export abstract class PageBaseComponent implements PageComponent, OnInit {
  pageId!: string;
  isStartup = false;
  displayFlex = true;
  alignCenter = false;
  hasOverflow = false;

  ngOnInit(): void {
    if (this.pageId === undefined || this.pageId.length === 0) {
      throw new Error('Component must set the [pageId] value');
    }
  }

}
