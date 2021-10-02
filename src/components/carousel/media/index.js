import product1 from "./product-1.jpg";

export const media = [product1];
export const mediaByIndex = (index) => media[index % media.length];
