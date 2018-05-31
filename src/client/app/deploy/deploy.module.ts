import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeployComponent } from './deploy.component';
import { DeployRoutingModule } from './deploy-routing.module';

@NgModule({
  imports: [CommonModule, DeployRoutingModule],
  declarations: [DeployComponent],
  exports: [DeployComponent]
})
export class DeployModule { }
