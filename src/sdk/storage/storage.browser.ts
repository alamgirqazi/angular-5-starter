/* tslint:disable */
import { Injectable } from "@angular/core";

@Injectable()
export class StorageBrowser {
  constructor() {}

  // GET
  async get(key: string): Promise<any> {
    let data: string = await localStorage.getItem(key);
    return this.parse(data);
  }

  // SET
  set(key: string, value: any): void {
    localStorage.setItem(
      key,
      typeof value === "object" ? JSON.stringify(value) : value
    );
  }

  // REMOVE
  remove(key: string): void {
    localStorage.remove(key);
  }
  
  /**
   * This method will parse the string as JSON if possible, otherwise will
   * return the value itself.
   **/
  private parse(value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
