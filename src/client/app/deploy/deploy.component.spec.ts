import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { DeployModule } from './deploy.module';

export function main() {
   describe('Deploy component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [DeployModule]
      });
    });

// no database on Travis build server (removed)
    // it('should work',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.createComponent(TestComponent);
    //         let DeployDOMEl = fixture.debugElement.children[0].nativeElement;

    //           expect(DeployDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Deployment setup');
    //       });
    //     }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-deploy></sd-deploy>'
})
class TestComponent {}
