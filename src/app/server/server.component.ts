import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number = 1;
  serverStatus: string = 'offline';
  detailsToggle: string = 'hidden'

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'lightgray'
  }

  toggleDetails() {
    this.detailsToggle = (this.detailsToggle == 'visible') ? 'hidden' : 'visible';
  }
}
