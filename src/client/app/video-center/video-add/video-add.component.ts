import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.scss']
})
export class VideoAddComponent implements OnInit {
  video: Video;
  @Output() videoAdded = new EventEmitter<Video>()
  constructor() { }

  ngOnInit() {
    this.video = {}
  }

  /**
   * save button event
   */
  addVideo(): void {
    this.videoAdded.emit(this.video);
  }

}
