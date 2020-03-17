import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  startDate: Date = new Date();

  // filterDate() {
  //   const currentDate = new Date();
  //   // console.log(date, " date");
  //   console.log(currentDate);
  //   return currentDate < this.startDate;
  // }
  constructor() {}

  ngOnInit(): void {
    // console.log(this.startDate);
  }
}
