import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Config } from '../../shared/config/env.config';

import { Scientist } from './name-list.model';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class NameListService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */

  private envUrl = Config.API + '/scientists';  // URL to web API

  constructor(private http: HttpClient) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getScientists(): Promise<Scientist[]> {

    return this.http.get<Scientist[]>(this.envUrl)
      .toPromise();
  }

  addScientist(name: string): Promise<Scientist> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post<Scientist>(this.envUrl, { name }, { headers: headers })
      .toPromise();
  }

}

