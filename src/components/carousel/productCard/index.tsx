import React from "react";

export interface ProductCardProps {
    title: string;
    price: number;
    isSold: boolean;
    isPointVisible: boolean;
}
const ProductCard: React.FunctionComponent<ProductCardProps> = (
    props: ProductCardProps,
) => {
    return <div>card</div>;
};

export default ProductCard;
