import { Component } from '@angular/core';
import { PhotosService } from '../serivices/photos.service'

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor(
    private photoService : PhotosService
  ) {}

  ngOnInit(): void {

    this.photoService.loadSaved()
  }

}
