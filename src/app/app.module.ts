import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabOverviewComponent } from './pages/lab-overview/lab-overview.component';
import { ParentInteractsWithChildUsingLocalVariableComponent } from './experiments/parent-interacts-with-child-using-local-variable/parent-interacts-with-child-using-local-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    LabOverviewComponent,
    ParentInteractsWithChildUsingLocalVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
