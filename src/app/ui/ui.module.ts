import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { HomeBannerComponent } from '../pages/home/home-banner/home-banner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ProfileDropdownComponent,
    MenuComponent,
    HomeBannerComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProfileDropdownComponent,
    MenuComponent,
    HomeBannerComponent,
    FooterComponent,
  ],
})
export class UiModule {}
