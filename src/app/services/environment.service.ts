import { Injectable } from '@angular/core';
import { IEnvironment } from '../../environments/ienvironment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements IEnvironment {

  constructor( ) { }
  production: boolean;
  
  public get apiHost() : string {
    return environment.apiHost;
  }

  
  public get apiUrl() : string {
    return this.apiHost + environment.apiUrl;
  }
  
  
}
