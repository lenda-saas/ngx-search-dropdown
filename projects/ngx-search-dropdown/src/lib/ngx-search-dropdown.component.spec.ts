import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSearchDropdownComponent } from './ngx-search-dropdown.component';
import { By } from '@angular/platform-browser';

describe('NgxSearchDropdownComponent', () => {
  let component: NgxSearchDropdownComponent;
  let fixture: ComponentFixture<NgxSearchDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSearchDropdownComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NgxSearchDropdownComponent);
    component = fixture.componentInstance;
    component.searchColumns = ['firstName', 'lastName'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a searchColumns @Input() with at least one value', () => {
    const searchColumns = (component.searchColumns = ['firstName']);
    expect(searchColumns.length).toBeGreaterThan(0);
  });

  it('should display the dropdown if text input has a value', () => {
    const searchInput = fixture.debugElement.query(
      By.css('[data-testid=searchInput]')
    );

    searchInput.nativeElement.value = 'john';
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    searchInput.nativeElement.dispatchEvent(new Event('focus'));

    fixture.detectChanges();

    const dropdown = fixture.debugElement.query(
      By.css('[data-testid=dropdown]')
    );

    expect(dropdown.nativeElement).toBeTruthy();
  });

  it('should show a badge if a dropdown item is selected', () => {
    const searchInput = fixture.debugElement.query(
      By.css('[data-testid=searchInput]')
    );

    searchInput.nativeElement.value = 'john';
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    searchInput.nativeElement.dispatchEvent(new Event('focus'));

    fixture.detectChanges();

    const dropdownItems = fixture.debugElement.queryAll(
      By.css('[data-testid=dropdown-item]')
    );

    const dropdownItem = dropdownItems[1];

    dropdownItem.nativeElement.click();

    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.css('[data-testid=badge]'));

    expect(component.selectedColumn).toBe('lastName');
    expect(component.selectedColumn).not.toBeNull();
    expect(badge.nativeElement).toBeTruthy();
  });

  it('should emit an event when a dropdown item is selected ', () => {
    const searchInput = fixture.debugElement.query(
      By.css('[data-testid=searchInput]')
    );

    searchInput.nativeElement.value = 'john';
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    searchInput.nativeElement.dispatchEvent(new Event('focus'));

    fixture.detectChanges();

    const dropdownItems = fixture.debugElement.queryAll(
      By.css('[data-testid=dropdown-item]')
    );

    const dropdownItem = dropdownItems[1];

    const spy = jest.spyOn(component.selectedItem, 'emit');

    dropdownItem.nativeElement.click();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();

    expect(spy).toHaveBeenLastCalledWith({ column: 'lastName', value: 'john' });
  });
});
