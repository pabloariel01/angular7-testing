import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { VoterComponent } from './1-voter/voter.component';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './highlight.directive';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective
    // NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
