import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabOverviewComponent } from './pages/lab-overview/lab-overview.component';
import { CountdownLocalVarParentComponent } from './experiments/parent-interacts-with-child-using-local-variable/countdown-local-var-parent/countdown-local-var-parent.component';
import { VersionChildComponent } from './experiments/intercept-input-property-changes-with-ngOnChanges/version-child/version-child.component';

const routes: Routes = [
	{ path: '', redirectTo: '/lab-overview', pathMatch: 'full' },
	{
		path: 'lab-overview',
		component: LabOverviewComponent
	},
	{
		path: 'parent-interacts-with-child-using-local-variable',
		component: CountdownLocalVarParentComponent
	},
	{
		path: 'intercept-input-property-changes-with-ngOnChanges',
		component: VersionChildComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
