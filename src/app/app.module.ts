import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusydevelopersNgifComponent } from './busydevelopers-ngif/busydevelopers-ngif.component';
import { BusydevelopersHiddenattrComponent } from './busydevelopers-hiddenattr/busydevelopers-hiddenattr.component';
import { BusydevelopersSwitchcaseComponent } from './busydevelopers-switchcase/busydevelopers-switchcase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusydeveloperNgforComponent } from './busydevelopers-ngfor/busydeveloper-ngfor.component';
import { BusydevelopersNgforChangedetectionComponent } from './busydevelopers-ngfor-changedetection/busydevelopers-ngfor-changedetection.component';
import { BusydevelopersNgforTrackbyComponent } from './busydevelopers-ngfor-trackby/busydevelopers-ngfor-trackby.component';
import { BusydevelopersNgclassComponent } from './busydevelopers-ngclass/busydevelopers-ngclass.component';
import { BusydevelopersNgstyleComponent } from './busydevelopers-ngstyle/busydevelopers-ngstyle.component';
import { BusydevelopersSaveTraversalOperatorComponent } from './busydevelopers-save-traversal-operator/busydevelopers-save-traversal-operator.component';
import { BusydevelopersCustomerDirectiveComponent } from './busydevelopers-customer-directive/busydevelopers-customer-directive.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    BusydevelopersNgifComponent,
    BusydevelopersHiddenattrComponent,
    BusydevelopersSwitchcaseComponent,
    BusydeveloperNgforComponent,
    BusydevelopersNgforChangedetectionComponent,
    BusydevelopersNgforTrackbyComponent,
    BusydevelopersNgclassComponent,
    BusydevelopersNgstyleComponent,
    BusydevelopersSaveTraversalOperatorComponent,
    BusydevelopersCustomerDirectiveComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
