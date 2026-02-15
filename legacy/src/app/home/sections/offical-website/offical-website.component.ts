import { Component } from '@angular/core';

@Component({
  selector: 'offical-website',
  templateUrl: './offical-website.component.html',
  styleUrls: ['./offical-website.component.scss']
})
export class OfficalWebsiteComponent {
  ripple_color: string = 'rgba(62,39,35,0.43)'

  ngOnInit() {
    document.getElementById("cards-website")!.addEventListener('mousemove', (event: any) => {

      // @ts-ignore
      for (let card of document.getElementsByClassName("card")) {

        const rect = card.getBoundingClientRect();

        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        card.style.setProperty(`--mouse-x`, `${x}px`);
        card.style.setProperty(`--mouse-y`, `${y}px`);
      }
    });
  }

  openOfficialSite() {
    //open official site on new tab
    window.open("https://existence-klcorp.com", "_blank");
  }
}
