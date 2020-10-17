import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  @Input() video: Video;
  constructor() { }

  ngOnInit() {
  }

}
