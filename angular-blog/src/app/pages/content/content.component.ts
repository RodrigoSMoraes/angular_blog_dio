import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string=""
  contentTitle:string=""
  contentDescription:string=""
  private id:string | null = ""

  constructor (
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      const id = value.get("id");
      if (id !== null) {
        this.id = id;
        this.setValuesComponent(this.id);
      }
    });
  }

  setValuesComponent(id:string ){ 
    const result = dataFake.filter( 
      ( article ) => article.id === id 
    )
    console.log(result)
    this.contentTitle = result[0].title;
    this.photoCover = result[0].photo;
    this.contentDescription = result[0].description;

  }

}
