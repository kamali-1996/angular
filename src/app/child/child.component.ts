import { Component, EventEmitter, Input, Output,OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  name:string|undefined;
  @Output()
  valToparent =new EventEmitter<string>();
  ngOnChanges():void{
    console.log("on change")

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  goTo(){
    this.valToparent.emit("hello parent this is from child")
  }


}
