import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Trade {
  name: string
}

@Component({
  selector: 'app-trade-builder',
  templateUrl: './trade-builder.component.html',
  styleUrls: ['./trade-builder.component.css']
})
export class TradeBuilderComponent {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  trades: Trade[] = new Array(0)
  checkoutForm = this.formBuilder.group({
    name: '',
  });


  onSubmit() {
    if (this.checkoutForm.value.name != null)
      this.trades.push({ name: this.checkoutForm.value.name })
  }

  delete(trade: Trade) {
    this.trades.splice(this.trades.indexOf(trade), 1)
  }
}
