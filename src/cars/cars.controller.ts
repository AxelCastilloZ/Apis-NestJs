import { Controller,Get } from "@nestjs/common";
import { CarsService } from "./cars.service";


@Controller({})

export class CarsController{

constructor(private readonly carsService: CarsService){}

@Get('/allCars')
getAllCars(){
    return this.carsService.getAllCars();
}

}