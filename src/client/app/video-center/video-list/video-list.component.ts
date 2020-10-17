import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Output() videoSelected = new EventEmitter<Video>()
  constructor() { }

  ngOnInit() {
  }

  /**
   * this event is fired when video is selected
   * @param video Video
   */
  onVideoSelect(video:Video): void {
    this.videoSelected.emit(video);
  }
}
