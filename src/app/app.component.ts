import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'app1';
  word:string|undefined;
  ngOnInit(){
    console.log("holo ononit")
  }
  
  ngDoCheck():void{
    console.log("hello do check")
  }
  
  style="new1";
  flag=true;
  arr=[1,2,3]
  changeFlag(){
    this.flag=!this.flag;
    this.style="new2"
  
  }
  getdata(e:any){
    this.title=e

  }
}
