import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuildComponent } from './build.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'build', component: BuildComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BuildRoutingModule { }
