export interface ProductTypesense {
    body_html: string;
    country: string;
    default_units_per_case: number;
    gtc_product: string;
    gtc_variant: string;
    id: string;
    image_srcset: string;
    image_thumbnail_100: string;
    image_thumbnail_250: string;
    image_thumbnail_500: string;
    in_stock: boolean;
    inventoried: boolean;
    on_sale_flag: boolean;
    on_sale_price: number;
    product_brand: string;
    product_category: string;
    product_id: number;
    product_name: string;
    product_size: string;
    product_sku: string;
    product_subcategory: string;
    product_subsubcategory: string;
    qty_available: number;
    region: string;
    retail_price: number;
    retail_price_str: string; // use this for showing to customer, its a string with no rounding/visual issus
    slug: string; // link to products is /products/[slug]
    store_id: number;
    subregion: string;
    taxable: true;
    varietal: string;
    vintage: string;
    collection_slugs: string[];
    collection_names: string[];
    price_range_bucket: string;
}
