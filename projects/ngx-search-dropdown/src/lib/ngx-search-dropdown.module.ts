import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSearchDropdownComponent } from 'ngx-search-dropdown';


@NgModule({
  imports: [CommonModule,NgxSearchDropdownComponent],
  exports: [NgxSearchDropdownComponent]
})
export class NgxSearchDropdownModule { }
