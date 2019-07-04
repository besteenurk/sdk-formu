import { Injectable } from '@angular/core';
import {FormServiceModel} from './form-service.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
	formData: FormServiceModel;
	readonly rootURL = 'http://localhost:59035/api';
	list: FormServiceModel[];

	constructor(private http: HttpClient) { }

	postPaymentDetail() {
		return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
	}
	putPaymentDetail() {
		return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.id, this.formData);
	}
	deletePaymentDetail(id) {
		return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
	}

	refreshList() {
		this.http.get(this.rootURL + '/PaymentDetail')
			.toPromise()
			.then(res => this.list = res as FormServiceModel[]);
	}
}
