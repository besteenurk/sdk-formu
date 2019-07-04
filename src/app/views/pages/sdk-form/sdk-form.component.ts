import {Component, OnInit} from '@angular/core';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {MatCard, MatCardModule} from '@angular/material';
import {FormControl} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'kt-sdk-form',
	templateUrl: './sdk-form.component.html',
	styleUrls: ['./sdk-form.component.scss'],
	providers: [
		NgbTabset
	],
})
export class SdkFormComponent implements OnInit {


	constructor(private fb: FormBuilder) { }

	houseInfForm = this.fb.group({
			street: [''],
			housePhone: [''],
			cellPhone: [''],
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			tc: [''],
	});

/*	personalForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		tc: ['']
	});*/

	onSubmitHouseForm() {
		// TODO: Use EventEmitter with form value
		console.warn(this.houseInfForm.value);
	}
	onSubmitPersonalForm() {
		// TODO: Use EventEmitter with form value
		console.warn(this.houseInfForm.value);
	}
	// sdkForm = new FormControl('');

	ngOnInit() {
	}
}
