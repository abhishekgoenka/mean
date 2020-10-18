import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  resetMsg: string = '';
  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  /**
   * when reset button is clicked
   */
  reset(): void {
    this.configService.reset().subscribe(() => this.resetMsg = `Database reset successfully`);
  }
}
