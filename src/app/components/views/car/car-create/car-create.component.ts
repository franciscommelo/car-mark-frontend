import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  car: Car = {
    make: '',
    model: '',
    color: '',
    year: 0,
    price: 0,
    mileage: 0,
    description: '',
    image: ''
  }

  constructor(private service: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.car).subscribe((resposta) => {
      this.router.navigate(['car'])
      this.service.mensagem('car succesfuly added!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['car'])
  }

}
