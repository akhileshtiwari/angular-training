import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * getItem
   */
  public getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * setItem
   */
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
