import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OddNumber: number[]=[];
  EvenNumber: number[]=[];

  onIntervalFired(firednumber:number){
    if( firednumber % 2 === 0){
      this.EvenNumber.push(firednumber);
    }else{
      this.OddNumber.push(firednumber); 
    }
    
   }
}
