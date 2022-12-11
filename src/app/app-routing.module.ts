import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabOverviewComponent } from './pages/lab-overview/lab-overview.component';

const routes: Routes = [
	{ path: '', redirectTo: '/lab-overview', pathMatch: 'full' },
	{ path: '**', component: LabOverviewComponent },
	{
		path: 'lab-overview',
		component: LabOverviewComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
