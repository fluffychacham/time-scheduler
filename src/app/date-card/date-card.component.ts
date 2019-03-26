import { Component, OnInit } from '@angular/core';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.sass']
})
export class DateCardComponent implements OnInit {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  weekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  constructor() { }

  getFormatedDate(section : string) : string{
    let date = new Date();
    let month = this.months[date.getMonth()];
    let day = date.getDate().toString();
    let year = date.getFullYear().toString();

    switch(section.toLowerCase()){
      case "month":
        return month;
      case "day":
        return day;
      case "year":
        return year;
      default:
        return month+" "+day+", "+year;
    }
        
  }

  getFutureDays(numberOfDays : number) : number[]{
    let date = new Date();
    let day = date.getDate();
    let days = [];
    for(let i = 0; i <= numberOfDays; i++){
      date.setDate(day + i)
      days.push(date.getDate());
    }
    return days;
  }
  getPastWeeks(numberOfWeeks : number, shorten : boolean) : string[]{
    let date = new Date();
    let week = date.getDay();
    let count = week;
    let weeks = [];
    for(let i = numberOfWeeks; i > 0; i--){
      if(count <= 0){
        count = 7;
      }
      count--;
      if(!shorten){
        weeks.push(this.weekName[count]);
      } else {
        weeks.push(this.shortenDateName(this.weekName[count]));
      }
    }
    return weeks.reverse();
  }

  getPastDays(numberOfDays : number) : number[]{
    let date = new Date();
    let day = date.getDate();
    let days = [];
    for(let i = numberOfDays; i > 0; i--){
      date.setDate(day - i);
      days.push(date.getDate());
    }
    return days;
  }

  getFormatedTime(section : string) : string{
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "am";

    if(hour > 12){
      hour = hour - 12;
      ampm = "pm";
    }

    switch(section.toLocaleLowerCase()){
      case "hour":
        return hour.toString();
      case "minutes":
        return minutes.toString();
      case "seconds":
        return seconds.toString();
      case "ampm":
       return ampm;
      default:
        return hour+":"+minutes+" "+ampm;
    }
  }

  shortenDateName(month : string) : string{
    return month.slice(0,3);
  }

  getDayOfWeek() : string{
    let date = new Date();
    let day = this.weekName[date.getDay()];
    return day.toString();
  }

  checkIfWeekday() : string{
    let date = new Date();
    if(date.getDate() == 0 || date.getDate() == 6){
      return "weekend";
    }
    return "weekday";
  }

  ngOnInit() {
  }

  month = this.shortenDateName(this.getFormatedDate("month"));
  day = this.getFormatedDate("day");
  week = this.getDayOfWeek();
  weeks = this.getPastWeeks(5, true);
  days = this.getPastDays(5);

  date = this.getFormatedDate("all");
  time = this.getFormatedTime("all");

}
