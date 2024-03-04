import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { icons } from './icons';

@NgModule({
  declarations: [AppComponent, StepperComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    let key: keyof typeof icons;
    for (key in icons)
      iconRegistry.addSvgIconLiteral(
        key,
        domSanitizer.bypassSecurityTrustHtml(icons[key])
      );
  }
}
