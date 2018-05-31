import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { BuildModule } from './build.module';

export function main() {
   describe('Build component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [BuildModule]
      });
    });

// no database on Travis build server (removed)
    // it('should work',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.createComponent(TestComponent);
    //         let BuildDOMEl = fixture.debugElement.children[0].nativeElement;

    //           expect(BuildDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Build setup');
    //       });
    //     }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-build></sd-build>'
})
class TestComponent {}
