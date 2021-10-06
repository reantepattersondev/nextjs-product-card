import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./productCard";
import { ProductTypesense } from "@/interfaces";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./Buttons";
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import styles from "./index.module.css";

type ProductCarouselProps = {
    products: ProductTypesense[];
    isAutoPlay: boolean;
    isButtonVisible: boolean;
};
const ProductCarousel: React.FunctionComponent<ProductCarouselProps> = (
    props: ProductCarouselProps,
) => {
    const AUTOPLAY_INTERVAL = 4000;

    const [emblaRef, embla] = useEmblaCarousel({
        containScroll: "trimSnaps",
        dragFree: true,
    });
    const autoplay = useCallback(() => {
        if (!embla || !props.isAutoPlay) return;
        if (embla.canScrollNext()) {
            embla.scrollNext();
        } else {
            embla.scrollTo(0);
        }
    }, [embla]);

    const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

    const [prevBtnVisible, setPrevBtnVisible] = useState(false);
    const [nextBtnVisible, setNextBtnVisible] = useState(false);
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnVisible(embla.canScrollPrev());
        setNextBtnVisible(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        embla.reInit({ loop: false });

        onSelect();
    }, [embla, onSelect]);
    +useEffect(() => {
        play();
    }, [play]);
    return (
        <div className="relative bg-gray-300 p-8 max-w-5xl mx-auto h-600p">
            <div className="w-full overflow-hidden" ref={emblaRef}>
                <div className={styles.embla__container}>
                    {props.products.map((product, index) => (
                        <div className="relative m-w-250p pl-2" key={index}>
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
            {props.isButtonVisible && (
                <PrevButton onClick={scrollPrev} isDisabled={prevBtnVisible} />
            )}
            {props.isButtonVisible && (
                <NextButton onClick={scrollNext} isDisabled={nextBtnVisible} />
            )}
        </div>
    );
};

export default ProductCarousel;
