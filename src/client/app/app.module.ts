import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { DeployModule } from './deploy/deploy.module';
import { BuildModule } from './build/build.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        HttpClientModule,
        AppRoutingModule,
        AboutModule,
        HomeModule,
        SharedModule.forRoot(),

        DeployModule,
        BuildModule,
    ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
