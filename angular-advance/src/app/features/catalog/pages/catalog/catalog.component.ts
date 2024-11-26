import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../models/product.model';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-catalog',
  imports: [
    ProductListComponent,
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent  implements OnInit {

  products: Product[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}