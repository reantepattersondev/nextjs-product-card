import media1 from "./media-1.jpeg";
import media2 from "./media-2.jpeg";
import media3 from "./media-3.jpeg";
import media4 from "./media-4.jpeg";
import media5 from "./media-5.jpeg";
import product1 from "./product-1.jpg";

export const media = [product1, media1, media2, media3, media4, media5];
export const mediaByIndex = (index) => media[index % media.length];
