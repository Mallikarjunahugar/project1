import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
 @Output() intervalFired = new EventEmitter<number>();
  interval:any ;
  lastnumber=0;
constructor(){}
ngOnInit(){}
onStart(){
  this.interval=setInterval(() =>{
this.intervalFired.emit(this.lastnumber + 1);
this.lastnumber++;
  },1000);
}
onStop(){
  clearInterval(this.interval);
}
}
