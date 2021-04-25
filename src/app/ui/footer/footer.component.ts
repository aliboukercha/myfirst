import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChildren('dropdown')
  private dropdownElements: QueryList<ElementRef<HTMLElement>>;
  constructor() {}

  ngOnInit(): void {}
}
