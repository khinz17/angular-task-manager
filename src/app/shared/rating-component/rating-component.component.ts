import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.scss']
})
export class RatingComponentComponent implements OnInit {

  @Input() rating: number = 0;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  openRatingDialog(){
    this.notify.emit()
  }

  counter(){
    return new Array(this.rating)
  }

  updateStarRating(isAdd: boolean){
    if(isAdd){
      this.notify.emit(this.rating++)
    }else{
      this.notify.emit(this.rating--)
    }
  }

}
