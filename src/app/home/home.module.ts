import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { HomeRoutingModule } from './home-routing.module'
import { LandingPageComponent } from './landing-page/landing-page.component'

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
