import { Injectable } from "@nestjs/common";


@Injectable()

export class CarsService{

    getAllCars(){
        return 'All cars';
    }
}