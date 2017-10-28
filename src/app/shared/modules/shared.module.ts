import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphCmsService } from '../services/graph-cms.service';
import { MetaTagService } from '../services/meta-tag.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [GraphCmsService, MetaTagService]
})
export class SharedModule { }
