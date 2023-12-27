import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  machines: string[]; 
  constructor() { 
     this.machines = ['Ruspa', 'Autocarro', 'Gru', 'Sallo', 'Pirls', 'Panda', 'Ruspm', 'Auts', 'Qul', 'Tolo']; 
  }
  ngOnInit() {
  }
  }

