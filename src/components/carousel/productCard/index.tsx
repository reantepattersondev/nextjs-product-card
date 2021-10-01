import React from "react";
import Image from "next/image";
import { ProductTypesense } from "@/interfaces";
import { mediaByIndex } from "../media";
import heartPng from "./heart.png";
import styles from "./index.module.css";

const ProductCard: React.FunctionComponent<ProductTypesense> = (
    props: ProductTypesense,
) => {
    return (
        <div className="relative h-400p w-200p bg-white p-6 items-center">
            <div className="min-h-full relative">
                <div className="absolute top-0 left-0 z-10 flex justify-between min-w-full">
                    <div>
                        <div className={styles.soldOut}>
                            <p className="text-nm text-center absolute top-4 min-w-full">
                                SOLD
                            </p>
                            <p className="text-nm text-center absolute top-8 min-w-full">
                                OUT
                            </p>
                        </div>
                        <div className={styles.pointMark}>
                            <p className="text-nl text-center absolute top-2 min-w-full">
                                100
                            </p>
                            <div className="absolute top-9 left-0 min-w-full flex justify-center">
                                <div className="border-t-2 min-w-3/4"></div>
                            </div>
                            <p className="text-ns text-center absolute top-9 min-w-full">
                                POINTS
                            </p>
                        </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-15p w-15p"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </div>
                <div className="absolute top-200">
                    <Image src={mediaByIndex(0)} alt="Picture of the author" />
                </div>
                <div className="absolute bottom-0">
                    <div className="flex justify-center border border-solid border-darkpink rounded-full mt-4 px-1 py-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-15p w-15p fill-current my-auto"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-center text-sm whitespace-nowrap">
                            Califonia, United States
                        </p>
                    </div>
                    <div className="text-center text-gray-800 text-lg font-bold line-clamp-2 mt-2">
                        1792 Bourbon Full Proof 12 Years (48.3% abv)
                    </div>
                    <div className="text-center text-gray-500 text-lg font-semibold text-center mt-4">
                        $109.99
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
