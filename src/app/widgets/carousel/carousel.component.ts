import { Component, OnInit, Input } from '@angular/core';
import { CarouselImage } from 'src/app/models/carousel-image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: CarouselImage[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoslide: boolean = false;
  @Input() timeInterval = 4000;

  indexItem = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoslide){
      this.slideShowImages()
    }
  }

  slideShowImages(): void {
    setInterval(() => {
      this.nextBtn()
    }, this.timeInterval)
  }

  selectImage(value: number): void{
    this.indexItem = value;
  }

  prevBtn(): void{
   if(this.indexItem === 0){
    this.indexItem = this.images.length - 1;
   } else {
    this.indexItem--;
   }
  }

  nextBtn(): void{
    if(this.indexItem === this.images.length - 1){
      this.indexItem = 0;
    } else {
      this.indexItem++;
    }
  }

}
