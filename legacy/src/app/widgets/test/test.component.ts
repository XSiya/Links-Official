import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  RendererStyleFlags2,
  ViewChild
} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragMove,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewChecked {
  @Output() activated = new EventEmitter<string>();

  isActivated: boolean = false;

  confettiParams = {
    particleCount: 100,
    spread: 70,
    origin: {y: 0.6}
  };

  showConfetti = false;
  todo: string[] = [];
  done: string[] = ['Egg'];
  id = "confetti";

  @ViewChild('boxmain', {static: false}) eggElement: ElementRef | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef, private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  drop(event: CdkDragDrop<string[]>) {

    if (this.isActivated) {
      this.activated.emit("close");
      this.isActivated = false;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  dropActivate(event: CdkDragDrop<string[], string[]>) {

    if (!this.isActivated) {
      this.showConfetti = true;
      this.activated.emit("open");

      this.isActivated = true;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  started($event: CdkDragMove) {
    //console.log($event)
    const element = document.getElementById("base-image");
    this.renderer.setStyle(element, 'opacity', '0.3');

    // const egg = $event.source.element.nativeElement;
    // this.renderer.setStyle(egg, 'opacity', '0.7', RendererStyleFlags2.Important);
    //
    //
    // const egg2 = this.el.nativeElement.querySelector(".box-main");
    // const childImg = egg2.querySelector('img');
    // this.renderer.setStyle(childImg, 'opacity', '0.7', RendererStyleFlags2.Important);
  }

  ended() {
    const element = document.getElementById("base-image");
    this.renderer.setStyle(element, 'opacity', '0');
  }
}
