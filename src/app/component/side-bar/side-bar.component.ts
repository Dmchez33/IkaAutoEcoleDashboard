import { MenuBarComponent } from './../../menu-bar/menu-bar.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as $ from 'jquery';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  sidebar = MenuBarComponent.showSidebar;
  
  constructor(private observer: BreakpointObserver){
    
  }
  ngOnInit(): void {
    console.log(MenuBarComponent.showSidebar);
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  open(){
    $('#sidebar').toggleClass('active');
    //console.log('fffffff')
  }
}
