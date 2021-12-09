export interface Order {
  OrderId: string;
  OrderShippingRate: number;
  OrderFlatShipping: boolean;
  OrderDateTime: string;
  OrderStatus: "PROCESSING",
  OrderTotal: number;
  OrderCustomerId: number;
  OrderShippingAddress: number;
  OrderItems: any[];
  OrderTrackingId: string;
}
export interface OrderUpload {

  OrderFlatShipping: boolean;
  OrderTotal: number;
  OrderCustomerId: string;
  OrderShippingAddress: string;
  OrderItems: OrderItem[];
}
export interface OrderItem
  {
      ProductId : string;
      ProductQuantity : number;
  }

  export interface Product {
    ProductId: number;
    ProductName: string;
    ProductSlug: string;
    ProductDescription: string;
    ProductImageUrl: string;
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
    ProductCategories: string;
    ProductTags: string[];
  }
export interface Category {
CategorySlug: string;
CategoryDescription: string;
CategoryFeaturedImageFile: string;
CategoryParent: string;
}
export class state{
 list=["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"];

}
export var base='https://smrutiranjan89.pythonanywhere.com/';
export var login='login';
