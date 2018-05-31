import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildComponent } from './build.component';
import { BuildRoutingModule } from './build-routing.module';

@NgModule({
  imports: [CommonModule, BuildRoutingModule],
  declarations: [BuildComponent],
  exports: [BuildComponent]
})
export class BuildModule { }
