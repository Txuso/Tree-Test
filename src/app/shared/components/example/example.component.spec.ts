import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
	let component: ExampleComponent;
	let fixture: ComponentFixture<ExampleComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ ExampleComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ExampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
