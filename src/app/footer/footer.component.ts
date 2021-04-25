import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChildren('dropdown')
  private dropdownElements: QueryList<ElementRef<HTMLElement>>;
  constructor() { }

  ngOnInit(): void {
  }

}
