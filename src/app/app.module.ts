import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    CustomPipePipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
