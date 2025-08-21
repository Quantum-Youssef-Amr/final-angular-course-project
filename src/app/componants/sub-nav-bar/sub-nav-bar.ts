import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-nav-bar',
  imports: [],
  templateUrl: './sub-nav-bar.html',
  styleUrl: './sub-nav-bar.css'
})
export class SubNavBar {
  selected: number = 0;
  showbtnlist = false;
  Select(i:number){
    this.selected = i;
  }

  showbtns(){
    this.showbtnlist = !this.showbtnlist;
  }
}
