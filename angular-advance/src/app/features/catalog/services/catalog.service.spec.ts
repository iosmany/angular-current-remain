import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CatalogService } from './catalog.service';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

describe('CatalogService', () => {
    let service: CatalogService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [CatalogService, provideHttpClientTesting()],
        });
        service = TestBed.inject(CatalogService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch products', () => {
        const dummyProducts: Product[] = [
            { id: 1, name: 'Product 1', price: 100, category: 'Category 1' },
            { id: 2, name: 'Product 2', price: 200, category: 'Category 2' },
        ];

        service.getProducts().subscribe((products) => {
            expect(products.length).toBe(2);
            expect(products).toEqual(dummyProducts);
        });

        const req = httpMock.expectOne(`${service['apiUrl']}/products`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyProducts);
    });

    it('should fetch categories', () => {
        const dummyCategories: Category[] = [
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' },
        ];

        service.getCategories().subscribe((categories) => {
            expect(categories.length).toBe(2);
            expect(categories).toEqual(dummyCategories);
        });

        const req = httpMock.expectOne(`${service['apiUrl']}/categories`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyCategories);
    });

    it('should fetch product by id', () => {
        const dummyProduct: Product = { id: 1, name: 'Product 1', price: 100, category: '1' };

        service.getProductById(1).subscribe((product) => {
            expect(product).toEqual(dummyProduct);
        });

        const req = httpMock.expectOne(`${service['apiUrl']}/products/1`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyProduct);
    });
});
