import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '../../../../../node_modules/@angular/material/expansion';
import {MatCardModule, MatIconModule, MatSelectModule, MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {CreateFormComponent} from './create-form.component';

@NgModule({
  declarations: [CreateFormComponent],
  imports: [
	  CommonModule,
	  MatTabsModule,
	  FormsModule,
	  MatButtonToggleModule,
	  MatExpansionModule,
	  MatButtonModule,
	  MatCardModule,
	  MatTableModule,
	  MatStepperModule,
	  MatIconModule,
	  MatDialogModule,
	  MatDatepickerModule,
	  MatInputModule,
	  MatRadioModule,
	  MatListModule,
	  MatFormFieldModule,
	  MatSelectModule,
	  ReactiveFormsModule,
	  RouterModule.forChild([
		  {
			  path: '',
			  component: CreateFormComponent
		  }
	  ])
  ],
	exports: [
		MatTabsModule,
		MatExpansionModule,
		ReactiveFormsModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [CreateFormComponent]
})
export class CreateFormModule { }
