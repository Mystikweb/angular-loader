import { Type } from '@angular/core';

// MODULE MODEL
export interface ModuleLoader {
  load: () => Type<any>;
}

// PAGE MODELS
export interface PageComponent {
  pageId: string;
  isStartup: boolean;
  displayFlex?: boolean;
  alignCenter?: boolean;
}
