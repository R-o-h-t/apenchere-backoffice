import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfferComponent } from './table-offer.component';

describe('TableOfferComponent', () => {
  let component: TableOfferComponent;
  let fixture: ComponentFixture<TableOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
