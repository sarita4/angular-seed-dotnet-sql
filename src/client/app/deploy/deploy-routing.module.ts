import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeployComponent } from './deploy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'deploy', component: DeployComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DeployRoutingModule { }
