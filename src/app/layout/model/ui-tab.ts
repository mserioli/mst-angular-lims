import { LimsTab } from './lims-tab';

export class UiTab {

  /**
   *
   */
  constructor(
    active: boolean,
    closeable: boolean,
  ) {
    this.active = active;
    this.closeable = closeable;
    this.limsTabs = [];
  }

  limsTabs?: LimsTab[] = [];
  active: boolean;
  closeable: boolean;

  get currentLimTab(): LimsTab {
    return this.limsTabs[this.limsTabs.length - 1];
  }
}
