
/** All Product Classes and ORDER CLasses */
export interface Order {
  OrderId: string;
  OrderShippingRate: number;
  OrderFlatShipping: boolean;
  OrderDateTime: string;
  OrderStatus: "PROCESSING",
  OrderTotal: number;
  OrderCustomerId: number;
  OrderShippingAddress: string;
  OrderItemId: number[];
  OrderTrackingId: string;
}
export interface Product {
  ProductId: number;
  ProductName: string;
  ProductSlug: string;
  ProductDescription: string;
  ProductFeaturedImageFile: string;
  ProductIsCustomizable: boolean;
  ProductPrice: number;
  ProductLaunchDate: string;
  ProductInventory: number;
  ProductInventoryUnit: string;
  ProductFeaturedPrice: number;
  ProductDiscountpercentage: number;
  ProductShippingRate: number;
  ProductFlatShipping: boolean;
  ProductCreater: number;
  ProductTaxCode: number;
  ProductCategories: string[];
  ProductTags: string[];
  ProductImageUrl:string;
}
export interface Category {
CategorySlug: string;
CategoryDescription: string;
CategoryFeaturedImageFile: ImageBitmap;
CategoryParent: string;
}
export interface Tax{
  TaxId: number;
  TaxName: string,
  TaxRate: number;
  TaxSlug: string;
}
