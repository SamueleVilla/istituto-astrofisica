import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CelestialFormComponent } from "./celestial-form/celestial-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CelestialDataInputComponent } from "./celestial-form/celestial-data-input/celestial-data-input.component";
import { CelestialService } from "./celestial-form/services/celestial.service";
import { InputControlService } from "./celestial-form/services/input-control.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CelestialModalContentComponent } from './celestial-form/celestial-modal-content/celestial-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CelestialFormComponent,
    CelestialDataInputComponent,
    CelestialModalContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CelestialService,
    InputControlService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
