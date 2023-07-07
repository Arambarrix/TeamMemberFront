import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAndRoleComponent } from './action-and-role.component';

describe('ActionAndRoleComponent', () => {
  let component: ActionAndRoleComponent;
  let fixture: ComponentFixture<ActionAndRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionAndRoleComponent]
    });
    fixture = TestBed.createComponent(ActionAndRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
