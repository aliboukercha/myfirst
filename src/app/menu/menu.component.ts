import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('dropdown')
  private dropdownElements: QueryList<ElementRef<HTMLElement>>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*[...this.dropdownElements].forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl.nativeElement)
    })*/
  }

  ngOnDestroy(): void {
  }
}
