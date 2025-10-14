import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEpisodios } from './header-episodios';

describe('HeaderEpisodios', () => {
  let component: HeaderEpisodios;
  let fixture: ComponentFixture<HeaderEpisodios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEpisodios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEpisodios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
