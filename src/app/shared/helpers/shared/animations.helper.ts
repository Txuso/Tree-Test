import { animate, style, transition, trigger } from '@angular/animations';

export const VerticalEaseInEaseOutAnimation = [
	trigger('verticalEaseInEaseOut', [
		transition(':enter', [
			style({
				height: 0,
				'padding-bottom': 0
			}),
			animate('0.5s ease')
		]),
		transition(':leave', [
			animate(
				'0.5s ease',
				style({
					height: 0,
					'padding-bottom': 0
				})
			)
		])
	])
];
