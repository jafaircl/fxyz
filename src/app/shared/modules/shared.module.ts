import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GraphCmsService } from '../services/graph-cms.service';
import { MetaTagService } from '../services/meta-tag.service';
import { SafePipe } from '../pipes/safe.pipe';
import { ExplodeAnimationDirective } from '../directives/explode-animation.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    SafePipe,
    ExplodeAnimationDirective
  ],
  declarations: [SafePipe, ExplodeAnimationDirective],
  providers: [GraphCmsService, MetaTagService]
})
export class SharedModule { }
