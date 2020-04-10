import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerStocksComponent } from './winner-stocks.component';

describe('WinnerStocksComponent', () => {
  let component: WinnerStocksComponent;
  let fixture: ComponentFixture<WinnerStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
