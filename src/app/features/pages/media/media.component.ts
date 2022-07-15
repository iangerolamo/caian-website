import { Component, OnInit } from '@angular/core';
import { concatMap, delay, Observable, of, repeat } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  // src!: Observable<any>;
  src$!: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.src$ = of('/assets/images/f4.jpg', '/assets/images/f3.jpg').pipe(
      concatMap((url) => of(url).pipe(delay(5000))),
      repeat()
    );
  }
}
