import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFromQueryComponent } from './post-from-query.component';

describe('PostFromQueryComponent', () => {
  let component: PostFromQueryComponent;
  let fixture: ComponentFixture<PostFromQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFromQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFromQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
