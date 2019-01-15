import { environment } from '../environments/environment';

/**
 * @module NG Config
 * @description
 *
 * Configuration with backend
 *
 **/
// tslint:disable-next-line:class-name
export class NGconfig {
  // private static path = 'http://localhost:3000/api';
  private static path = 'http://localhost:4500';
  private static api_version = '1';
  public static getPath(): string {
    return NGconfig.path;
    // + '/' + HSconfig.api_version;
  }
  public static getEnvPath(): string {
    return environment.apiBase + '/' + NGconfig.api_version;
  }
}
