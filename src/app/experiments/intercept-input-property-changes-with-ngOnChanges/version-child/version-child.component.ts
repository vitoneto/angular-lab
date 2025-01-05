import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'app-version-child',
    templateUrl: './version-child.component.html',
    styleUrls: ['./version-child.component.scss'],
    standalone: false
})
export class VersionChildComponent implements OnChanges {

	@Input() major = 0;
	@Input() minor = 0;
	changeLog: string[] = [];

	ngOnChanges(changes: SimpleChanges): void {
		const log: string[] = [];
		for (const propName in changes) {
			const changedProp = changes[propName];
			const to = changedProp.currentValue.toString();
			if(changedProp.isFirstChange()) {
				log.push(`Initial value of ${propName} set to ${to}`);
			} else {
				const from = changedProp.previousValue.toString();
				log.push(`${propName} changed from ${from} to ${to}`)
			}
		}
		this.changeLog.push(log.join(', '))
	}
}
