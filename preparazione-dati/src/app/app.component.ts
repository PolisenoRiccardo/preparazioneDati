import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class UserListComponent implements OnInit {
  machines: string[]; 
  constructor() { 
     this.machines = ['Ruspa', 'Autocarro', 'Gru', 'Sallo', 'Pirls', 'Panda', 'Ruspm', 'Auts', 'Qul', 'Tolo']; 
  }
  ngOnInit() {
  }
}