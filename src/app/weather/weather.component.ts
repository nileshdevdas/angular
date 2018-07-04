import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Http} from '@angular/http';
import {Input} from '@angular/core';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
   myservice:DataService  = null; 

   employees=null;	
   constructor(service:DataService) {
  	this.myservice = service; 
   }
	
  displayEmployees(){
	this.empid=100;
	this.myservice.getEmployees().subscribe(this.handleResponse.bind(this));
  }
  handleResponse(result){
	console.log(this);
	this.employees = result.json();
  }
  ngOnInit() {
  }

}
