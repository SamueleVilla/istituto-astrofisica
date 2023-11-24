import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CelestialFormComponent } from "./celestial-form/celestial-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CelestialDataInputComponent } from "./celestial-form/celestial-data-input/celestial-data-input.component";
import { CelestialService } from "./celestial-form/celestial.service";
import { InputControlService } from "./input/input-control.service";

@NgModule({
  declarations: [
    AppComponent,
    CelestialFormComponent,
    CelestialDataInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CelestialService,
    InputControlService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
