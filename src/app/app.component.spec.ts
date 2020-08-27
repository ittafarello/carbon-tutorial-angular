import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AddModule } from '@carbon/icons-angular'
import { UIShellModule } from 'carbon-components-angular'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, UIShellModule, AddModule],
      declarations: [AppComponent, HeaderComponent],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'carbon-angular-tutorial'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('carbon-angular-tutorial')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain(
      'carbon-angular-tutorial app is running!'
    )
  })
})
