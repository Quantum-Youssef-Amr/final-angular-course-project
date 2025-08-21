import { Component, Input} from '@angular/core';
import { licensetype } from '../../types/license.type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dropdown-item',
  imports: [NgFor],
  templateUrl: './dropdown-item.html',
  styleUrl: './dropdown-item.css'
})
export class DropdownItem {
    @Input() plan!: licensetype;
}
