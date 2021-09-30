import React, { useState, useEffect, useCallback } from "react";
import ProductCardProps from "./productCard";
import { ProductTypesense } from "@/interfaces";
import useEmblaCarousel from "embla-carousel-react";
//import './index.css'

type ProductCarouselProps = {
    products: ProductTypesense[];
    isAutoPlay: boolean;
    isButtonVisible: boolean;
};
const ProductCarousel: React.FunctionComponent<ProductCarouselProps> = (
    props: ProductCarouselProps,
) => {
    const [emblaRef, embla] = useEmblaCarousel({
        containScroll: "trimSnaps",
        dragFree: true,
    });
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    );
};

export default ProductCarousel;
