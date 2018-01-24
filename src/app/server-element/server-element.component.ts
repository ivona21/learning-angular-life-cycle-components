import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input("srvElement") element: { name: string, content: string, type: string }
  @Input() name: string;
  @ViewChild("heading") header: ElementRef; 
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    console.log("constructer called!");
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log("header: ", this.header.nativeElement.textContent);
    console.log("paragraph: ", this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log("changes: ", changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log("paragraph: ", this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log("header: ", this.header.nativeElement.textContent);
    console.log("paragraph: ", this.paragraph.nativeElement.textContent)

  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
