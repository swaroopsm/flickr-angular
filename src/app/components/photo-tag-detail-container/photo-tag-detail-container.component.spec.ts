import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTagDetailContainerComponent } from './photo-tag-detail-container.component';

describe('PhotoTagDetailContainerComponent', () => {
  let component: PhotoTagDetailContainerComponent;
  let fixture: ComponentFixture<PhotoTagDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoTagDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoTagDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
