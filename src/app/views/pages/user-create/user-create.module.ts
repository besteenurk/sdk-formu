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
import { PartialsModule } from '../../partials/partials.module';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CoreModule } from '../../../core/core.module';
import {UserCreateComponent} from './user-create.component';
@NgModule({
  declarations: [UserCreateComponent],
  imports: [
	  CommonModule,
	  MatTabsModule,
	  FormsModule,
	  MatButtonToggleModule,
	  MatExpansionModule,
	  MatButtonModule,
	  PartialsModule,
	  MatCardModule,
	  MatTableModule,
	  MatStepperModule,
	  MatIconModule,
	  MatDialogModule,
	  MatDatepickerModule,
	  MatInputModule,
	  CoreModule,
	  MatRadioModule,
	  MatListModule,
	  MatFormFieldModule,
	  MatSelectModule,
	  ReactiveFormsModule,
	  RouterModule.forChild([
		  {
			  path: '',
			  component: UserCreateComponent
		  }
	  ])
  ],
	exports: [
		MatTabsModule,
		MatExpansionModule,
		ReactiveFormsModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [UserCreateComponent]
})
export class UserCreateModule { }
