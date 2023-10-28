import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  bigSidebar = true;

  public handleClick(){
    this.bigSidebar = !this.bigSidebar;
  }

  public menuItemClick(menuItem: string) : void {
    alert(menuItem);
  }
}
