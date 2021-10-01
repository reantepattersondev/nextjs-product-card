import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./productCard";
import { ProductTypesense } from "@/interfaces";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./index.module.css";

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
        <div className="relative bg-gray-300 p-8 max-w-5xl mx-auto h-600p">
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {props.products.map((product, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
