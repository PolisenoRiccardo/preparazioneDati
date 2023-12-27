import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})

export class MachineComponent implements OnInit{
  @Input() machine: string;
  pezzi:string[]; 
  constructor() {
    this.pezzi = ['bulloni', 'viti', 'ferro']
  }
  ngOnInit() {
  }
}
