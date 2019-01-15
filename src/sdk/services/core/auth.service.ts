import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { CookieBrowser } from '../../storage//cookiestorage.browser';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SDKToken } from './BaseModels';
import { StorageBrowser } from '../../storage/storage.browser';

@Injectable()
export class AuthService {
  constructor(
    protected browser: StorageBrowser,
    protected cookieBrowser: CookieBrowser
  ) {}
  private token: SDKToken = new SDKToken();

  public async initializer() {
    const results = await Promise.all([this.load('data'), this.load('token')]);
    this.token.data = results[0];
  }
  public getToken(): SDKToken {
    return this.token as SDKToken;
  }

  public save() {
    this.persist('token', this.token.data.token);
    // this.persist('data', this.token.data);
  }
  public saveToken() {
    this.persist('token', 'test token');
    // this.persist('data', this.token.data);
  }
  public setToken(token: SDKToken): void {
    this.token = Object.assign(this.token, token);
    this.save();
  }

  protected async load(prop: string): Promise<any> {
    return await this.browser.get(`${prop}`);
  }
  protected persist(prop: string, value: any): void {
    try {
      this.browser.set(
        `${prop}`,
        typeof value === 'object' ? JSON.stringify(value) : value
      );
    } catch (err) {
      console.error('Cannot access local/session storage:', err);
    }
  }

  public getAccessTokenId() {
    const token = localStorage.getItem('token');
    if(token){
      return 'Bearer ' + token;
    }
    else
    return null;
  }

  
  public getSimpleAccessTokenId() {
    const token = localStorage.getItem('token');
  return token;
  }

  /**
   * Clear token and other user releated data.
   */

  public clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
  }
}
