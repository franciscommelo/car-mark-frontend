import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class carDeleteComponent implements OnInit {

  car: Car = {
    id: 0,
    make:'',
    model: '',
    color: '',
    year: 0,
    price: 0,
    mileage: 0,
    description: '',
    image: ''
  
  }

    

  constructor(private service: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.car.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.findById()
  }

  findById(): void {
    this.service.findById(this.car.id!).subscribe((resposta) => {
      this.car = resposta.data.car;
    })
  }

  delete(): void {
    this.service.delete(this.car.id!).subscribe((resposta) => {
      this.router.navigate(['car'])
      this.service.mensagem('car deletada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['car'])
  }

}
