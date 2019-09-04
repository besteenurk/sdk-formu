import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {UserInfComponent} from './user-inf.component';
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [UserInfComponent],
  imports: [
    CommonModule,
	  MatIconModule,
	  PartialsModule,
	  MatListModule,
	  MatCardModule,
	  CoreModule,
	  RouterModule.forChild([
		  {
			  path: '',
			  component: UserInfComponent
		  }
	  ])
  ],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [UserInfComponent]
})
export class UserInfModule { }
