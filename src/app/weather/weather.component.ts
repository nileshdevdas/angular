import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Http} from '@angular/http';
import {MessageService} from '../MessageService';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private country:string ="";
   private counts:number = 0;
   myservice:DataService  = null;
   messageService:MessageService= null;
   employees=null;
   eventState= "panel panel-primary";

constructor(service:DataService, messageService:MessageService) {
  	  this.myservice = service;
      this.messageService = messageService;
      this.messageService.subscribeEvent()
          .subscribe(this.handleEvents.bind(this));
}

handleEvents(event){
  console.log(event)
   this.counts++;
   console.log("event received.................");
   this.country= event.country;
}





  displayEmployees(){
	   this.myservice.getEmployees().subscribe(this.handleResponse.bind(this));
  }
  handleResponse(result){
	     console.log(this);
	    this.employees = result.json();
  }
  ngOnInit() {
  }

}
