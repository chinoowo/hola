import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonessegPage } from './botonesseg.page';

describe('BotonessegPage', () => {
  let component: BotonessegPage;
  let fixture: ComponentFixture<BotonessegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotonessegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
