import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './post-list/post-list.component';

import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PostListRoutingModule,
    SharedModule
  ],
  declarations: [PostListComponent]
})
export class PostListModule { }
