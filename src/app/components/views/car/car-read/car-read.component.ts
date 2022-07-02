import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Car } from "../car.model";
import { CarService } from "../car.service";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { ViewChild } from '@angular/core'




@Component({
  selector: "app-car-read",
  templateUrl: "./car-read.component.html",
  styleUrls: ["./car-read.component.css"],
})
export class CarReadComponent implements OnInit {

  car : Car[] = [];

  displayedColumns: string[] = ["id", "make", "model", "color","year", "price", "mileage", "description", "actions"];

  constructor(private service: CarService, private router: Router, private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      
      console.log(resposta.data.cars);
      this.cars = resposta.data.cars;
      
    });
  }


  navegarParaCarCreate() {
    this.router.navigate(["car/create"])
  }
}
