import {Component, inject, OnInit} from '@angular/core';
import {ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode} from 'tsparticles-engine';
import {loadFull} from "tsparticles";
import {ProfileService} from "../services/profile-service/profile.service";
import {Profile} from "./models/profile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  color: string = 'red'
  ripple_color: string = 'rgba(13,71,161,0.43)';


  profile?: Profile;
  isLoading = true;
  isImageLoading = true;

  constructor(private router: Router ) {

  }

  onImageLoad() {
    this.isImageLoading = false;
  }



  ngOnInit() {
    let cardsInventions = document.getElementsByClassName("cards-profile");

    for (let i = 0; i < cardsInventions.length; i++) {
      cardsInventions[i].addEventListener('mousemove', (event: any) => {
        //@ts-ignore
        for (let card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect();

          let x = event.clientX - rect.left;
          let y = event.clientY - rect.top;

          card.style.setProperty(`--mouse-x`, `${x}px`);
          card.style.setProperty(`--mouse-y`, `${y}px`);
        }
      });
    }
  }



  openTwitter() {
    window.open("https://twitter.com/siyabon_ga", "_blank");
  }

  openInstagram() {
    window.open("https://www.instagram.com/xmushin_", "_blank");
  }

  openYoutube() {
    window.open("https://www.youtube.com/channel/UCgexyO6hnPI1divaPXxLByQ", "_blank");

  }

  openTicktok() {
    window.open("https://www.tiktok.com/@siyabon_ga?_t=8eWl2ff1Wfm&_r=1", "_blank");
  }

  openFacebook() {
    window.open("https://www.facebook.com/profile.php?id=100088547062516&mibextid=LQQJ4d", "_blank");
  }

  openSpotify() {
    window.open("https://open.spotify.com/show/6MVCEpJ28PMZ7VzCpdC00C", "_blank");
  }

  openWhatApp() {
    window.open("https://wa.me/c/27659192291", "_blank");
  }

  openGithub() {
    window.open("https://github.com/XSiya", "_blank");
  }

  openProfile() {
    this.router.navigate(['/profile'],);
  }
}
