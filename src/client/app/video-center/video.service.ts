import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './models/video'
import { Observable } from 'rxjs';

const api = '/api';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${api}/videos`);
  }
}
