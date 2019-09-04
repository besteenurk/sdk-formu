// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../../core/auth';
import { NgxPermissionsGuard } from 'ngx-permissions';
import {SdkFormComponent} from '../../pages/sdk-form/sdk-form.component';
import {CreateFormComponent} from '../../pages/create-form/create-form.component';
import {SettingsComponent} from '../../pages/settings/settings.component';
import {UserInfComponent} from '../../pages/user-inf/user-inf.component';
import {UserCreateComponent} from '../../pages/user-create/user-create.component';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'sdk',
				// loadChildren: 'app/views/pages/sdk-form/sdk-form.module#SdkFormModule'
				component: SdkFormComponent
			},
			{
				path: 'createForm',
				component: CreateFormComponent
			},
			{
				path: 'settings',
				component: SettingsComponent
			},
			{
				path: 'userDefinition',
				component: UserInfComponent
			},
			{
				path: 'createPersonel',
				component: UserCreateComponent,
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
