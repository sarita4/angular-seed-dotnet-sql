import { NameListService } from './../shared/name-list/name-list.service';
import { Scientist } from './../shared/name-list/name-list.model';
import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [NameListService]
})
export class HomeComponent implements OnInit {

  newName: '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */

  public scientists: Scientist[];
  constructor(public nameListService: NameListService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.getScientists()
      .then(
        data => this.scientists = data,
        error => this.errorMessage = <any>error
      );
  }

  addName() {
    if (!this.newName) { return; }
    this.nameListService.addScientist(this.newName)
      .then(
        scientist => this.scientists.push(scientist),
        error => this.errorMessage = <any>error);

    this.newName = '';

  }

}
