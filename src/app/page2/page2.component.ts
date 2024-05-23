import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  constructor(private route:ActivatedRoute ,private rou:Router){
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"])
    this.rou.navigate(["/child"],{
      queryParams:{category:"education"}

    })

  }


}
