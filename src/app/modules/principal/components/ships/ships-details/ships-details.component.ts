import { Component, OnInit, Input } from '@angular/core';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: number;
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor() { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

   separateNumber(url: string): number {
    const splitUrl = url.split('/');
    const number = parseInt(splitUrl[splitUrl.length - 2]);
    return number;
  }

  getStarshipId(url) {
    this.shipId = this.separateNumber(url)
    
    const urlImage ='https://starwars-visualguide.com/assets/img/starships/'+`${this.shipId}.jpg`
    return urlImage ;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
