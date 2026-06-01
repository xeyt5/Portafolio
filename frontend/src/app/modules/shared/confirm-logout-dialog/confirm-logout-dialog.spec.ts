import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLogoutDialog } from './confirm-logout-dialog';

describe('ConfirmLogoutDialog', () => {
  let component: ConfirmLogoutDialog;
  let fixture: ComponentFixture<ConfirmLogoutDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmLogoutDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmLogoutDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
