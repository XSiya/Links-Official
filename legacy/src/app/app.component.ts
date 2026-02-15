import { Component } from '@angular/core';
import {ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import {Router} from "@angular/router";
import {TerminalService} from "ngx-core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'links';
  id = "tsparticles";
  particlesOptions = {
    preset: "snow",
    background: {
      color: {
        value: "#0F0F0F",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.attract,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 400, // Distance of attraction
          duration: 0.4, // Duration of the effect
          speed: 15 // Speed of attraction
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value:  [ "#151515"]
      },
      move: {
        direction: MoveDirection.top,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 10,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
        stroke:[
          {
            width: 5,
            color: "#B71C1C"
          },
          {
            width: 5,
            color: "#880E4F"
          },
          {
            width: 5,
            color: "#4A148C"
          },
          {
            width: 5,
            color: "#311B92"
          },
          {
            width: 5,
            color: "#1A237E"
          },
          {
            width: 5,
            color: "#0D47A1"
          },
          {
            width: 5,
            color: "#01579B"
          },
          {
            width: 5,
            color: "#006064"
          },
          {
            width: 5,
            color: "#004D40"
          },
          {
            width: 5,
            color: "#1B5E20"
          },
          {
            width: 5,
            color: "#33691E"
          },
          {
            width: 5,
            color: "#827717"
          },
          {
            width: 5,
            color: "#F57F17"
          },
          {
            width: 5,
            color: "#FF6F00"
          },
          {
            width: 5,
            color: "#E65100"
          },
          {
            width: 5,
            color: "#BF360C"
          },
          {
            width: 5,
            color: "#212121"
          },
          {
            width: 5,
            color: "#3E2723"
          },
          {
            width: 5,
            color: "#263238"
          }]
      },
      size: {
        value: 200,
        random: true
      },
    },
    detectRetina: true,
  };

  isLoading: boolean = false;

  constructor(private router: Router, private terminalService: TerminalService) {
  }

  particlesLoaded(container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

  eggActivated(response: string) {
    if (response == 'open') {
      this.isLoading = true;
      this.terminalService.unlock();
      this.router.navigate(['/egg'],);
    } else {
      this.isLoading = false;
      this.router.navigate(['/'],);
    }
  }
}
