import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL ='http://10.10.9.62/hrtest';
   //'https://gatewaytest.nlicgulf.com';
  //API_URL = 'https://gatewaytest.nlicgulf.com';
  constructor() { }
}
