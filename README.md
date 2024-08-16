<div align="center">
  <h1> ngx-search-dropdown</h1>
  A project for display dropdown values for search inputs
  <br/><br/>

<a href="https://www.npmjs.org/package/ngx-toastr">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="licence">
  </a>
  <a href="https://codecov.io/github/scttcper/ngx-toastr">
    <img src="https://img.shields.io/npm/v/ngx-search-dropdown" alt="npm">
  </a>

  <a href="https://github.com/lenda-saas/ngx-search-dropdown/actions/workflows/npm.yml">
    <img src="https://github.com/lenda-saas/ngx-search-dropdown/actions/workflows/npm.yml/badge.svg" alt="npm">
  </a>
  <br/><br/>

  <img width="380" alt="image" src="https://github.com/user-attachments/assets/24304cf0-31f4-4f41-afb5-678e14075e0c">
</div>

## Installation

```bash
npm i ngx-search-dropdown --save
```

## Usage

```html
<ngx-search-dropdown [searchColumns]="searchColumns" [placeholder]="placeholder" (selectedItem)="performAction($event)" />
```

## Parameters

| Option        | Description                                                           | Required |
| ------------- | --------------------------------------------------------------------- | -------- |
| searchColumns | An array of strings identifying the column to be used for search      | Yes      |
| placeholder   | Default text displayed on the text box                                | No       |
| theme         | Values which adjust the color scheme of the dropdown (ligh/dark) mode | No       |
| selectedItem  | Emit the selected item (`{value:string,column:string}`)               | No       |

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
