import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cars: any[] = [
    { 'marca': 'Ford', 'modelo': 'EcoSport', 'precio': 1450000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Ford', 'modelo': 'Mondeo', 'precio': 3150000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Ford', 'modelo': 'Territory', 'precio': 3500000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Ford', 'modelo': 'Ranger', 'precio': 2500000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Ford', 'modelo': 'Ka', 'precio': 1000000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Ford', 'modelo': 'Mustang', 'precio': 19000000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Chevrolet', 'modelo': 'Onix', 'precio': 950000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Chevrolet', 'modelo': 'Prisma', 'precio': 1050000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Chevrolet', 'modelo': 'Cruze', 'precio': 1950000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Chevrolet', 'modelo': 'Spin', 'precio': 1350000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Chevrolet', 'modelo': 'S10', 'precio': 2150000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Chevrolet', 'modelo': 'Camaro', 'precio': 22150000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'Gol', 'precio': 1120000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'Polo', 'precio': 1423000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'Up!', 'precio': 1000000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'Sirocco', 'precio': 22000000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'Amarok', 'precio': 3400000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'Tiguan', 'precio': 2650000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'Touareg', 'precio': 3650000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Volkswagen', 'modelo': 'T-Cross', 'precio': 1750000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Renault', 'modelo': 'Sandero', 'precio': 1120000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Renault', 'modelo': 'Sandero RS', 'precio': 1420000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Renault', 'modelo': 'Sandero StepWay', 'precio': 1320000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Renault', 'modelo': 'Duster', 'precio': 1500000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Renault', 'modelo': 'Duster Oroch', 'precio': 1350000, 'lanzamiento': new Date(this.dateRandom()) },
    { 'marca': 'Renault', 'modelo': 'Megane', 'precio': 1850000, 'lanzamiento': new Date(this.dateRandom()) },
  ];
  headersAuto = [
    { field: 'marca', header: 'Marca' },
    { field: 'modelo', header: 'Modelo' },
    { field: 'precio', header: 'Precio' },
    { field: 'lanzamiento', header: 'Lanzamiento' }
  ];
  constructor(private httpService: HttpService) { }

  getTest(){
    return this.httpService.get('https://httpbin.org/get');
  }

  getHeadersAutos(){
    return this.headersAuto;
  }
  getAutos(){
    return this.cars;
  }
  dateRandom(): number {
    var max = 1607090194087;
    var min = 1500000000000;
    return Math.floor(Math.random() * (max - min)) + min
  }
}
