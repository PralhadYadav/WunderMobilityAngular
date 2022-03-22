import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { products } from './../../constants/mock-response';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [RouterTestingModule, ToastrModule.forRoot()]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.products = products;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render products array', () => {
    let cards = fixture.debugElement.queryAll(By.css('.card-body'));
    expect(cards.length).toBeGreaterThan(0)
  })

  it("should have card title", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-body')).toBeDefined();
  })

  it("should have buy button", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#buy-btn')).toBeDefined();
  })

  it("should have Add to cart button", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#product-btn')).toBeDefined();
  })

  it("should have product image", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-img-top')).toBeDefined();
  })

  it("should have card title and price", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')).toBeDefined();
  })
});
