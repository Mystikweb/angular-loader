import { Component } from '@angular/core';

export interface TabLink {
  title: string;
  url: string;
}

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  readonly tabs = new Array<TabLink>(...[
    { title: 'Application', url: 'app' },
    { title: 'Project A', url: 'projecta' }
  ]);
}
