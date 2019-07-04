import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SdkFormComponent} from './sdk-form.component';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [SdkFormComponent],
	imports: [
		CommonModule,
		MatTabsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: '',
				component: SdkFormComponent
			}
		])
	],
	exports: [
		MatTabsModule,
		ReactiveFormsModule,
	]
})
export class SdkFormModule {
}
