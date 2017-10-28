import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GraphCmsService } from '../services/graph-cms.service';
import { MetaTagService } from '../services/meta-tag.service';
import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SafePipe
  ],
  declarations: [SafePipe],
  providers: [GraphCmsService, MetaTagService]
})
export class SharedModule { }
