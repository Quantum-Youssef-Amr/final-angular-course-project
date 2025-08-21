import { Component } from '@angular/core';
import { DropdownItem } from "../dropdown-item/dropdown-item";
import { licensetype } from '../../types/license.type';

@Component({
  selector: 'app-nav-bar',
  imports: [DropdownItem],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar{
  isDropDownOpen: boolean = false;
  HideTimeoutId = 0;

  ToggleDropDown(){
    this.isDropDownOpen = !this.isDropDownOpen;
    this.HideTimeoutId = setTimeout(() => {
      this.isDropDownOpen = false;
    }, 500);
  }
  
  OnMouseExit(){
    this.HideTimeoutId = setTimeout(() => {
      this.isDropDownOpen = false;
    }, 500);
  }

  OnMouseEnter(){
    clearTimeout(this.HideTimeoutId);
  }

  licenses: Array<licensetype> = [
    {
      name: "Stamderd license",
      priceing: 49,
      banifits: ["Use for a single product", "Non-Paying users only"]
    },
    {
      name: "Multisite license",
      priceing: 149,
      banifits: ["Use for a unlimited product", "Non-paying users only"]
    },
    {
      name: "Extended license",
      priceing: 449,
      banifits: ["Use for a sigle product", "Paying users allowed"]
    }
  ];
}
