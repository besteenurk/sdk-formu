import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, NgForm} from '@angular/forms';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';

@Component({
	selector: 'kt-create-form',
	templateUrl: './create-form.component.html',
	styleUrls: ['./create-form.component.scss'],
	providers: [
		NgbTabset,
		{provide: MAT_DATE_LOCALE, useValue: 'tr-TR'},
		{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
		{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
	]
})
export class CreateFormComponent implements OnInit {

	houseRegForm = this.fb.group({
		houseAddress: [''],
		cellPhone: [''],
		homePhone: [''],
		meetingDate: [''],
		responsiblePerson: ['']
	});

	selectedIndex: number = 0;
	constructor(private fb: FormBuilder) {
	}

	date = new FormControl(new Date());

	houseFormControl(): void {
		// f.reset();
		console.warn(this.houseRegForm.value);
	}

	nextTab() {
		this.selectedIndex = 1;
	}

	ngOnInit() {
	}

}
