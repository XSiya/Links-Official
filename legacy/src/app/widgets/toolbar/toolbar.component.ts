import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'expandable-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  private isCollapsable = true;
  private isCollapsed = false;

  private selectedElement: any;

  @HostListener('window:scroll', ['$event'])
  isCollapse() {
    if (this.isCollapsable) {
      if (window.scrollY >= 40) {
        this.isCollapsed = true;
        return true;
      } else {
        this.isCollapsed = false;
        return false;
      }
    } else {
      this.isCollapsed = true;
      return true;
    }
  }

  handleNavClick(event: Event, ref: string) {
    const target = event.target as HTMLElement;

    this.selectedElement.classList.remove("color-text");

    this.selectedElement = target;
    const targetWidth = target.getBoundingClientRect().width;
    const targetOffset = target.offsetLeft;
    target.classList.add("color-text");
    const navIndicator = document.querySelector('.nav-indicator') as HTMLElement;
    navIndicator.style.width = `${targetWidth}px`;
    navIndicator.style.left = `${targetOffset}px`;


    if (target.innerHTML != "Help") {
      const data = document.getElementById(ref)
      window.scrollTo({
        top: data!.offsetTop - 100,
        behavior: 'smooth'
      });
    }

  }

}
