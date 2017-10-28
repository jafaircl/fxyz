import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourOFourRoutingModule } from './four-o-four-routing.module';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

@NgModule({
  imports: [
    CommonModule,
    FourOFourRoutingModule
  ],
  declarations: [FourOFourComponent]
})
export class FourOFourModule { }
