import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBuilderComponent } from './trade-builder.component';

describe('TradeBuilderComponent', () => {
  let component: TradeBuilderComponent;
  let fixture: ComponentFixture<TradeBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
