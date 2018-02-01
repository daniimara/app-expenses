import {
	Directive,
	ElementRef,
	Input,
	OnInit, OnChanges, Renderer2
} from '@angular/core';

import { FormatterNumber } from '../utils/formatter';

@Directive({
	selector: '[currency]'
})
export class CurrencyDirective implements OnInit, OnChanges {

	@Input('innerHtml') innerHtml = '';

	constructor(public element: ElementRef,
		public formatter: FormatterNumber,
		public renderer: Renderer2) { }

	ngOnInit() {
		this.changeNumber();
	}

	ngOnChanges() {
		this.changeNumber();
	}

	changeNumber() {
		this.formatter.getCurrencyFormatted(this.innerHtml)
			.then((newNumber) => {
				this.element.nativeElement.innerHTML = newNumber;
			});
	}
}