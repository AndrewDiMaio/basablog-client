import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { PostsComponent } from './posts/posts.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    PostsComponent,
    PostcommentsComponent,
    PostDetailsComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
