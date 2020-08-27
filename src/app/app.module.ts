import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AddModule } from '@carbon/icons-angular'
import { UIShellModule } from 'carbon-components-angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, UIShellModule, AddModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
