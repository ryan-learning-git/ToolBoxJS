import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkshomeComponent } from './linkshome.component';

describe('LinkshomeComponent', () => {
  let component: LinkshomeComponent;
  let fixture: ComponentFixture<LinkshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
