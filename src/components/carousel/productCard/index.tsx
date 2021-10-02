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
        <div className="relative h-400p w-200p bg-white p-6 items-center cursor-pointer">
            <div className="min-h-full relative">
                <div className="absolute top-0 left-0 z-10 flex justify-between min-w-full">
                    <div>
                        {props.in_stock && (
                            <div className={styles.badgeWrapper}>
                                <div className={styles.soldOutContainer}>
                                    <div className={styles.soldOutLabel}>
                                        Sold Out
                                    </div>
                                </div>
                            </div>
                        )}
                        {!props.on_sale_flag && (
                            <div className={styles.badgeWrapper}>
                                <div className={styles.pointMarkContainer}>
                                    <div className={styles.pointMarkPoints}>
                                        100
                                    </div>
                                    <div className={styles.pointMarkLabel}>
                                        POINTS
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <svg
                        className="h-25p w-25p"
                        viewBox="0 0 32 32"
                        fill="#2A2D34"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27.9555 11.7024C27.3629 11.7024 26.8756 12.1935 26.8756 12.7907C26.8756 15.5911 25.19 18.4048 21.845 21.1388L15.9716 25.5584C15.0366 24.9612 13.3641 23.8596 10.2035 21.2583C6.85856 18.511 5.15974 15.6973 5.15974 12.8969C5.15974 11.437 5.60749 10.0301 6.39764 9.02144C7.29314 7.88004 8.55738 7.29607 10.1377 7.29607C11.4019 7.29607 12.5081 7.56151 13.4168 8.07912C13.7855 8.29148 14.1279 8.54364 14.4045 8.83563C14.7995 9.23379 14.9839 9.57887 15.0103 9.61868C15.1815 10.0036 15.5634 10.2292 15.9848 10.2292H16.0374C16.472 10.2292 16.8408 9.9903 17.012 9.60541C17.091 9.44615 18.2762 7.17662 21.8845 7.17662C22.9644 7.17662 23.9258 7.49515 24.7159 8.11894C25.19 8.49056 25.8616 8.41092 26.2304 7.93313C26.5991 7.45533 26.5201 6.77846 26.046 6.40684C24.8608 5.47779 23.4648 5 21.8845 5C18.7898 5 16.9725 6.30066 15.9848 7.34916C15.9584 7.32261 15.9453 7.29607 15.9189 7.2828C15.4975 6.85809 15.0103 6.48647 14.4703 6.18122C13.2324 5.46452 11.7706 5.10618 10.1245 5.10618C7.87258 5.10618 6.00256 5.99541 4.68565 7.66769C3.60578 9.07453 3 10.9326 3 12.8969C3 16.4007 4.9622 19.7718 8.8471 22.9571C12.2579 25.7443 14.0621 26.9122 14.9444 27.4829C15.1288 27.6023 15.2868 27.6953 15.3922 27.7749C15.5765 27.8943 15.7872 27.974 16.0111 27.974H16.0638C16.3008 27.974 16.5247 27.8943 16.7091 27.7616L23.1751 22.8908C23.1883 22.8775 23.2015 22.8775 23.2146 22.8642C27.0863 19.6922 29.0617 16.3078 29.0617 12.804C29.0354 12.1935 28.5613 11.7024 27.9555 11.7024Z"
                            fill="#2A2D34"
                        ></path>
                    </svg>
                </div>
                <div className="absolute top-200">
                    <Image src={mediaByIndex(0)} alt="Picture of the author" />
                </div>
                <div className="absolute bottom-0">
                    <div className="flex justify-center border border-solid border-darkpink rounded-full mt-4 px-1 py-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-17p w-17p fill-current my-auto"
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
