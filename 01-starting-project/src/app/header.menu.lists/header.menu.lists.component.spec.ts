import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuListsComponent } from './header.menu.lists.component';

describe('HeaderMenuListsComponent', () => {
  let component: HeaderMenuListsComponent;
  let fixture: ComponentFixture<HeaderMenuListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMenuListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenuListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
