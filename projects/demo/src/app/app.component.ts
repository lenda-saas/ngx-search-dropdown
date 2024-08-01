import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSearchDropdownComponent, Theme } from 'ngx-search-dropdown';
import { SelectedItem } from '../../../ngx-search-dropdown/src/ngx-search-dropdown.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSearchDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
  searchColumns = ["Email Address","Invoice Code"];
  placeholder = "Enter Search Term";
  theme:Theme = {
    mode:'dark',
    textLight:'#3e5363',
    primaryColor:'#19558c'
  }

  performAction(event:SelectedItem | null){
    //perform action here, e.g: API Call
  }
}
