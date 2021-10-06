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
    useEffect(function mount() {
        function onScroll() {
            if (!embla) return;
            const width = window.innerWidth;
            console.log(width);
            let slidesToScroll = 1;
            if (width < 1420 && width > 1132) {
                slidesToScroll = 2;
            }
            if (width < 862 && width > 597) {
                slidesToScroll = 2;
            }
            embla.reInit({
                containScroll: "keepSnaps",
                slidesToScroll: slidesToScroll,
            });
        }

        window.addEventListener("resize", onScroll);

        return function unMount() {
            window.removeEventListener("resize", onScroll);
        };
    });
    const [emblaRef, embla] = useEmblaCarousel({
        containScroll: "keepSnaps",
        slidesToScroll: 1,
    });
    const autoplay = useCallback(() => {
        if (!embla || !props.isAutoPlay) return;
        if (embla.canScrollNext()) {
            embla.scrollNext();
        } else {
            embla.scrollTo(0);
        }
    }, [embla]);

    const changeSlidesToScroll = useCallback(() => {
        if (!embla) return;
        const width = window.innerWidth;
        if (width < 1420 && width > 1132) {
            embla.reInit({
                containScroll: "keepSnaps",
                slidesToScroll: 2,
            });
            console.log("reinited");
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
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {props.products.map((product, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__inner">
                                <ProductCard {...product} />
                            </div>
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
