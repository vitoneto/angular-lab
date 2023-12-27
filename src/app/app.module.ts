import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabOverviewComponent } from './pages/lab-overview/lab-overview.component';
import { CountdownLocalVarParentComponent } from './experiments/parent-interacts-with-child-using-local-variable/countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownTimerComponent } from './experiments/parent-interacts-with-child-using-local-variable/countdown-timer/countdown-timer.component';
import { InterceptInputPropertyChangesWithNgOnChangesComponent } from './experiments/intercept-input-property-changes-with-ng-on-changes/intercept-input-property-changes-with-ng-on-changes.component';

@NgModule({
	declarations: [
		AppComponent,
		LabOverviewComponent,
		CountdownLocalVarParentComponent,
  CountdownTimerComponent,
  InterceptInputPropertyChangesWithNgOnChangesComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
