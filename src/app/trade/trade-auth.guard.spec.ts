import { TestBed, async, inject } from '@angular/core/testing';

import { TradeAuthGuard } from './trade-auth.guard';

describe('TradeAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeAuthGuard]
    });
  });

  it('should ...', inject([TradeAuthGuard], (guard: TradeAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
