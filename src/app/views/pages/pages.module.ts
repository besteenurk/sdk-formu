// Angular
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import {SdkFormModule} from './sdk-form/sdk-form.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CreateFormModule} from './create-form/create-form.module';
import {SettingsModule} from './settings/settings.module';
import { UserInfComponent } from './user-inf/user-inf.component';
import {UserInfModule} from './user-inf/user-inf.module';
import { UserCreateComponent } from './user-create/user-create.component';
import {UserCreateModule} from './user-create/user-create.module';
@NgModule({
	declarations: [MyPageComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
		CoreModule,
		SdkFormModule,
		PartialsModule,
		UserCreateModule,
		UserInfModule,
		MatFormFieldModule,
		CreateFormModule,
		SettingsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
	],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
}
