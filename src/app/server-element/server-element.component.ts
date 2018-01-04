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
  OnDestroy
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

  constructor() {
    console.log("constructer called!");
  }

  ngOnInit() {
    console.log("ngOnInit called!");
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
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
