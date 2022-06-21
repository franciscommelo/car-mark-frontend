import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Car } from "../car.model";
import { CarService } from "../car.service";

@Component({
  selector: "app-car-update",
  templateUrl: "./car-update.component.html",
  styleUrls: ["./car-update.component.css"],
})
export class CarUpdateComponent implements OnInit {

  car: Car = {
    make: '',
    model: '',
    color: '',
    year: 0,
    price: 0,
    mileage: 0,
    description: '',
    image: ''
  };


  constructor(
    private service: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.car.id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.findById();
  }

  findById(): void {
    this.service.findById(this.car.id!).subscribe((resposta) => {
     this.car = resposta.data.car;
    });
  }

  update(): void {
    this.service.update(this.car).subscribe((resposta) => {
      this.router.navigate(["car"]);
      this.service.mensagem("Categoria atualizada com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['car'])
  }

}
