import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // searchCategory: string = '';
  products =[
    {pnumber:'101',title: "A23s", price:'2400',category:"Electronic",},
    {pnumber:'102',title: "Tesla",price:'750k',category:"Cars",},
    {pnumber:'103',title: "Coussim watch",price:'45k',category:"Fashion",},
    {pnumber:'104',title: "Apple watch ",price:'3800',category:"Electronic",},
    {pnumber:'105',title: "Love Bracelet ",price:'76k',category:"Jewellery",},
    {pnumber:'106',title: "Renault Captur",price:'240k',category:"Cars",},
    {pnumber:'107',title: "Chain Bag",price:'29k',category:"Fashion",},
    {pnumber:'108',title: "Trinity Ring ",price:'14k',category:"Jewellery",},
    {pnumber:'109',title: "Smart TV 43 ",price:'4999',category:"Electronic",},
    {pnumber:'110',title: "MacBook pro 16  ",price:'26k',category:"Electronic",},
    {pnumber:'111',title: "Seat leon FR ",price:'300k',category:"Cars",}
  ]
  product ={
     pnumber:'',
     title:"",
     price:'',
     category:"",

  }
  // searchByCategory(category: string) {

  //   this.searchCategory = category;
  // }

  searchCat: string = '';
  searchName: string = '';

  // filteredProducts: any[] = [];

  // filterProducts() {
  //   this.filteredProducts = this.products.filter(product => {
  //     const searchNameLowerCase = this.searchName.toLowerCase();
  //     const searchCatLowerCase = this.searchCat.toLowerCase();
  //     const titleMatch = product.title.toLowerCase().includes(searchNameLowerCase);
  //     const categoryMatch = product.category.toLowerCase().includes(searchCatLowerCase);
  //     return titleMatch && categoryMatch;
  //   });
  // }



  getCategoryClass(category: string): string {
  switch (category) {
    case 'Cars':
      return 'badge-cars';
    case 'Electronic':
      return 'badge-electronic';
    case 'Fashion':
      return 'badge-fashion';
    case 'Jewellery':
      return 'badge-jewellery';
    default:
      return '';
  }
}
}

