import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Breadcrumbs } from './breadcrumbs.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnChanges {
  @Input() url!: string;
  breadCrumbs: Breadcrumbs[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.breadCrumbs = this.buildBreadCrumbs(changes['url'].currentValue);
  }

  buildBreadCrumbs(url: string): Breadcrumbs[]{
    const urlArray = url.split('/');
    const breadCrumbs: Breadcrumbs[] = [];

    urlArray.forEach((item, index) => {
      if (item.length > 0) {
        breadCrumbs.push({
          name: item,
          url: urlArray.slice(0, index + 1).join('/')
        });
      }
    });

    return [{ name: 'HOME', url: '' }, ...breadCrumbs];
  }

}
