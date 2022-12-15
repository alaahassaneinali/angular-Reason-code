import { Component, Input, OnInit, Output } from '@angular/core';
import { ReasonCode, getReasonCodes } from './reason-codes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input()
  readonly reasonCodes = getReasonCodes();

  @Input()
  readonly reasonTitle: string = '';
  @Input()
  readonly reasonLabel: string = '';
  @Output()
  readonly selectedReasonCodes = new Map<number, ReasonCode>([]);
  emptyItems: number[] = new Array(0);
  private readonly itemsPerColumn = 5;

  ngOnInit() {
    if (this.reasonCodes.size % this.itemsPerColumn > 0) {
      const count =
        this.itemsPerColumn - (this.reasonCodes.size % this.itemsPerColumn);
      // eslint-disable-next-line functional/immutable-data
      this.emptyItems = new Array(count);
      console.log(`this.emptyItems ${this.emptyItems}`);
    }
  }

  onCheckboxChange(reasonCode: ReasonCode) {
    this.selectedReasonCodes.set(Number(reasonCode.rcKey), reasonCode);
  }
}
