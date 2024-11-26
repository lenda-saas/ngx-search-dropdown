import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectedItem } from '../ngx-search-dropdown.types';
import { Theme } from 'ngx-search-dropdown';

@Component({
  selector: 'ngx-search-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ngx-search-dropdown.component.html',
  styleUrl: './ngx-search-dropdown.component.scss',
})
export class NgxSearchDropdownComponent implements OnInit, OnChanges {
  @Input({required:true}) searchColumns: string[] = [];

  @Input() placeholder = 'Enter Keyword';

  @Input() theme!: Theme;

  @Output() selectedItem = new EventEmitter<SelectedItem | null>();

  inputValue = '';

  showDropdown = signal(false);

  selectedColumn!: string;

  constructor(private el:ElementRef){}

  @HostListener('document:click', ['$event'])
  clickOut(event:Event){
    if (!this.el.nativeElement.contains(event.target)) {
      this.showDropdown.set(false);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['theme']?.currentValue?.mode !==
      changes['theme']?.previousValue?.mode
    ) {
      this.setThemeColors();
    }
  }

  ngOnInit(): void {
    this.setThemeColors();
  }

  private setThemeColors() {
    document.documentElement.style.setProperty('--nsd-text-dark', '#000');
    if (!this.theme?.mode) {
      this.theme = { ...this.theme, mode: 'light' };
    }
    if (this.theme?.primaryColor) {
      document.documentElement.style.setProperty(
        '--nsd-primary-color',
        this.lightenColor(this.theme?.primaryColor, 45)
      );
    } else {
      document.documentElement.style.setProperty(
        '--nsd-primary-color',
        '#f1f1f1'
      );
    }

    if (this.theme?.mode === 'light') {
      document.documentElement.style.setProperty('--nsd-bg-color', '#fff');

      document.documentElement.style.setProperty(
        '--nsd-text-color',
        this.theme?.textLight || '#000'
      );

      if (!this.theme.primaryColor) {
        document.documentElement.style.setProperty(
          '--nsd-accent-color',
          '#000'
        );
      } else {
        document.documentElement.style.setProperty(
          '--nsd-accent-color',
          this.theme.primaryColor
        );
      }
    }

    if (this.theme?.mode === 'dark') {
      document.documentElement.style.setProperty('--nsd-bg-color', '#181818');

      document.documentElement.style.setProperty(
        '--nsd-text-color',
        this.theme?.textBlack || '#fff'
      );

      document.documentElement.style.setProperty(
        '--nsd-accent-color',
        '#f1f1f1'
      );
    }
  }

  private lightenColor(hexCode: string, lightenAmount: number): string {
    const transparencyPairs: { [key: number]: string } = {
      100: 'FF',
      99: 'FC',
      98: 'FA',
      97: 'F7',
      96: 'F5',
      95: 'F2',
      94: 'F0',
      93: 'ED',
      92: 'EB',
      91: 'E8',
      90: 'E6',
      89: 'E3',
      88: 'E0',
      87: 'DE',
      86: 'DB',
      85: 'D9',
      84: 'D6',
      83: 'D4',
      82: 'D1',
      81: 'CF',
      80: 'CC',
      79: 'C9',
      78: 'C7',
      77: 'C4',
      76: 'C2',
      75: 'BF',
      74: 'BD',
      73: 'BA',
      72: 'B8',
      71: 'B5',
      70: 'B3',
      69: 'B0',
      68: 'AD',
      67: 'AB',
      66: 'A8',
      65: 'A6',
      64: 'A3',
      63: 'A1',
      62: '9E',
      61: '9C',
      60: '99',
      59: '96',
      58: '94',
      57: '91',
      56: '8F',
      55: '8C',
      54: '8A',
      53: '87',
      52: '85',
      51: '82',
      50: '80',
      49: '7D',
      48: '7A',
      47: '78',
      46: '75',
      45: '73',
      44: '70',
      43: '6E',
      42: '6B',
      41: '69',
      40: '66',
      39: '63',
      38: '61',
      37: '5E',
      36: '5C',
      35: '59',
      34: '57',
      33: '54',
      32: '52',
      31: '4F',
      30: '4D',
      29: '4A',
      28: '47',
      27: '45',
      26: '42',
      25: '40',
      24: '3D',
      23: '3B',
      22: '38',
      21: '36',
      20: '33',
      19: '30',
      18: '2E',
      17: '2B',
      16: '29',
      15: '26',
      14: '24',
      13: '21',
      12: '1F',
      11: '1C',
      10: '1A',
      9: '17',
      8: '14',
      7: '12',
      6: '0F',
      5: '0D',
      4: '0A',
      3: '08',
      2: '05',
      1: '03',
      0: '00',
    };
    return `${hexCode}${transparencyPairs[lightenAmount]}`;
  }

  onSelect(column: string) {
    this.selectedColumn = column;
    this.selectedItem.emit({ value: this.inputValue, column });
    this.showDropdown.set(false);
  }

  focused() {
    this.showDropdown.set(true);
  }

  onKeyUp() {
    if (this.inputValue.length === 0) {
      this.selectedItem.emit(null);
    }
  }

  reset(){
    this.inputValue = '';
    this.selectedColumn = '';
    this.selectedItem.emit(null);
  }
}
