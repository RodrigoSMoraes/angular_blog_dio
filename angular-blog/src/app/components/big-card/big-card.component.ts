import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
  photoCover: string = "https://variety.com/wp-content/uploads/2013/03/ironman31.jpg?w=1000&h=563&crop=1&resize=1000%2C563"
  cardTitle: string = "Robert Downey Jr: No Plans for 'Iron Man 4'"
  cardDescription: string = "Don't hold your breath, Tony Stark fans. In a new interview with Variety, Robert Downey Jr. shot down speculation about a fourth 'Iron Man' movie. 'There isn't one in the pipe,' Downey said. 'No, there's no plan for a fourth 'Iron Man.'"
  
  constructor() { }

  ngOnInit(): void {
  }
}
