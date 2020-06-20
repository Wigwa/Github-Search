import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomDirective } from './custom.directive';
import { GitSearchDetailsComponent } from './git-search-details/git-search-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    CustomPipePipe,
    CustomDirective,
    GitSearchDetailsComponent,
    NotFoundComponent,
    RepositoriesComponent,
    SearchFormComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
