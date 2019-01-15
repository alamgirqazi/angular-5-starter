import { Injectable } from "@angular/core";
export interface CookieInterface {
  [key: string]: any;
}

@Injectable()
export class CookieBrowser {
  private cookies: CookieInterface = {};

  get(key: string): any {
    if (!this.cookies[key]) {
      let cookie = window.document.cookie
        .split("; ")
        .filter((item: any) => item.split("=")[0] === key)
        .pop();
      if (!cookie) {
        return null;
      }

      this.cookies[key] = this.parse(
        cookie
          .split("=")
          .slice(1)
          .join("=")
      );
    }

    return this.cookies[key];
  }
  /*
   * The setter will return any type of data persisted in cookies.
   **/
  set(key: string, value: any, expires?: Date): void {
    this.cookies[key] = value;
    let cookie = `${key}=${value}; path=/${
      expires ? `; expires=${expires.toUTCString()}` : ""
    }`;
    window.document.cookie = cookie;
  }
  /**
   * This method will remove a cookie from the client.
   **/
  remove(key: string) {
    document.cookie = key + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  private parse(value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
