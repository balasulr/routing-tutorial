import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  errors: any = {
    1: "A bad error",
    2: "A really bad error",
    3: "The worst error"
  }
  errorMessage: string =""; // Property
  errorCode: number = -1; // Will bind errorMessage & errorCode

  constructor(
    private route: ActivatedRoute // private is available throughout class & how inject Services & is a parameter
  ) { }

  ngOnInit(): void { // ngOnInit is where inialization data is put before user can see the page
    let ec = +this.route.snapshot.params["ec"]; // The plus sign turns into a number. Whats in the quoutes is what called in app-routing.module
    this.errorMessage = this.errors[ec];
    this.errorCode = ec;
  }

}
