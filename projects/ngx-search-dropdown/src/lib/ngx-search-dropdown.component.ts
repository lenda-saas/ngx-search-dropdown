import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectedItem } from '../ngx-search-dropdown.types';

export type Theme = {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  textLight?: string;
  textBlack?: string;
  mode?: 'light' | 'dark'
};

@Component({
  selector: 'ngx-search-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ngx-search-dropdown.component.html',
  styleUrl: './ngx-search-dropdown.component.scss'
})

export class NgxSearchDropdownComponent implements OnInit, OnChanges {
  @Input() searchColumns:string[] = [];

  @Input() placeholder = "Enter Keyword";

  @Input() theme!:Theme;

  @Output() selectedItem = new EventEmitter<SelectedItem | null>();

  inputValue = '';

  showDropdown = signal(false);

  selectedColumn!:string;

  ngOnChanges(changes: SimpleChanges): void {
    this.setThemeColors();
  }

  ngOnInit(): void {
    this.setThemeColors();
  }

  private setThemeColors(){
    if (!this.theme?.mode) {
      this.theme = {...this.theme,mode:'light'};
    }
    document.documentElement.style.setProperty(
      '--nsd-primary-color',
      this.theme?.primaryColor || '#f1f1f1',
    );

    document.documentElement.style.setProperty(
      '--nsd-text-dark','#000',
    );


    if (this.theme?.mode === 'light') {
      document.documentElement.style.setProperty(
        '--nsd-bg-color', '#fff',
      );

      document.documentElement.style.setProperty(
        '--nsd-text-color',
        this.theme?.textLight || '#000',
      );

      if (this.theme.primaryColor) {
        document.documentElement.style.setProperty(
          '--nsd-accent-color','#f1f1f1',
        );
      } else{
        document.documentElement.style.setProperty(
          '--nsd-accent-color','#000',
        );
      }

    }

    if (this.theme?.mode === 'dark') {
      document.documentElement.style.setProperty(
        '--nsd-bg-color', '#181818',
      );

      document.documentElement.style.setProperty(
        '--nsd-text-color',
        this.theme?.textBlack || '#fff',
      );

      document.documentElement.style.setProperty(
        '--nsd-accent-color','#f1f1f1',
      );
    }
  }

  onSelect(column:string){
    this.selectedColumn = column;
    this.selectedItem.emit({value:this.inputValue,column});
    this.showDropdown.set(false);
  }

  focused(){
    this.showDropdown.set(true)
  }

  onKeyUp(){
    if (this.inputValue.length === 0) {
    this.selectedItem.emit(null);
    }
  }
}
