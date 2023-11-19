import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UI-task';
  width: number = 0;
  screensize: number = 0;
  showMobile: boolean = false;

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.width = event.target.innerWidth;
    if(this.width < 600){
      this.showMobile = true;
    } else {
      this.showMobile = false;
    }
    console.log(this.showMobile)
	}

  ngOnInit(): void{
    console.log(window.innerWidth)
    if(window.innerWidth < 600){
      this.showMobile = true
    } else {
      this.showMobile = false
    }
  }

}
