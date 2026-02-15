import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  groove_ripple: string = 'rgba(27,94,32,0.43)';
  xflush_ripple: string = 'rgba(136,14,79,0.43)';
  afterlife_ripple: string = 'rgba(74,20,140,0.43)';
  truetime_ripple: string = 'rgba(13,71,161,0.43)';
  cc_ripple: string = 'rgba(230,81,0,0.43)';
  plates_ripple: string = 'rgba(183,28,28,0.43)';

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    document.getElementById("cards")!.addEventListener('mousemove', (event: any) => {

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

  openGroove() {
    window.open("https://groove-l.app/dynamic/apps", "_blank");
  }

  openXFlush() {
    window.open("https://xflush.app/dynamic/app", "_blank");
  }

  openAfterlife() {
    window.open("https://after-life.app/dynamic/apps", "_blank");
  }

  openTrueTime() {
    window.open("https://true-time.app/dynamic/apps", "_blank");
  }

  openCC() {
    window.open("https://cheat-codes.app/dynamic/app", "_blank");
  }

  openPlates() {
    window.open("https://n-plates.app/dynamic/app", "_blank");
  }

  openInventions() {
    this._snackBar.open("Inventions is still in internal release and will be live soon.", "Cools");
  }


}
