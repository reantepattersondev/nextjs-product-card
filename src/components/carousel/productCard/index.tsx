import React, { useState } from "react";
import Image from "next/image";
import { ProductTypesense } from "@/interfaces";
import styles from "./index.module.css";
import placeholderImage from "@/assets/product-placeholder.png";

const ProductCard: React.FunctionComponent<ProductTypesense> = (
    props: ProductTypesense,
) => {
    const [isAddBtnShown, setIsAddBtnShown] = useState(false);
    const [isStockShown, setIsStockShown] = useState(false);
    const [isCardActive, setIsCardActive] = useState(false);
    return (
        <div
            className="relative h-400p w-200p bg-white p-6 items-center cursor-pointer"
            onMouseEnter={() => setIsCardActive(true)}
            onMouseLeave={() => setIsCardActive(false)}
        >
            <div
                className="min-h-full relative"
                style={{
                    transform: isCardActive
                        ? "translateY(-10px)"
                        : "translateY(10px)",
                    transitionDuration: "500ms",
                }}
            >
                <div className="absolute top-0 left-0 z-10 flex justify-between min-w-full">
                    <div>
                        {!props.in_stock && (
                            <div className={styles.badgeWrapper}>
                                <div className={styles.soldOutContainer}>
                                    <div className={styles.soldOutLabel}>
                                        Sold Out
                                    </div>
                                </div>
                            </div>
                        )}
                        {props.on_sale_flag && (
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
                        fill="#9195A0"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M27.9555 11.7024C27.3629 11.7024 26.8756 12.1935 26.8756 12.7907C26.8756 15.5911 25.19 18.4048 21.845 21.1388L15.9716 25.5584C15.0366 24.9612 13.3641 23.8596 10.2035 21.2583C6.85856 18.511 5.15974 15.6973 5.15974 12.8969C5.15974 11.437 5.60749 10.0301 6.39764 9.02144C7.29314 7.88004 8.55738 7.29607 10.1377 7.29607C11.4019 7.29607 12.5081 7.56151 13.4168 8.07912C13.7855 8.29148 14.1279 8.54364 14.4045 8.83563C14.7995 9.23379 14.9839 9.57887 15.0103 9.61868C15.1815 10.0036 15.5634 10.2292 15.9848 10.2292H16.0374C16.472 10.2292 16.8408 9.9903 17.012 9.60541C17.091 9.44615 18.2762 7.17662 21.8845 7.17662C22.9644 7.17662 23.9258 7.49515 24.7159 8.11894C25.19 8.49056 25.8616 8.41092 26.2304 7.93313C26.5991 7.45533 26.5201 6.77846 26.046 6.40684C24.8608 5.47779 23.4648 5 21.8845 5C18.7898 5 16.9725 6.30066 15.9848 7.34916C15.9584 7.32261 15.9453 7.29607 15.9189 7.2828C15.4975 6.85809 15.0103 6.48647 14.4703 6.18122C13.2324 5.46452 11.7706 5.10618 10.1245 5.10618C7.87258 5.10618 6.00256 5.99541 4.68565 7.66769C3.60578 9.07453 3 10.9326 3 12.8969C3 16.4007 4.9622 19.7718 8.8471 22.9571C12.2579 25.7443 14.0621 26.9122 14.9444 27.4829C15.1288 27.6023 15.2868 27.6953 15.3922 27.7749C15.5765 27.8943 15.7872 27.974 16.0111 27.974H16.0638C16.3008 27.974 16.5247 27.8943 16.7091 27.7616L23.1751 22.8908C23.1883 22.8775 23.2015 22.8775 23.2146 22.8642C27.0863 19.6922 29.0617 16.3078 29.0617 12.804C29.0354 12.1935 28.5613 11.7024 27.9555 11.7024Z"></path>
                    </svg>
                </div>
                <div className="absolute top-200">
                    {props.image_thumbnail_500 ? (
                        <Image
                            src={props.image_thumbnail_500}
                            alt={`Picture of ${props.product_name}`}
                            width={200}
                            height={250}
                        />
                    ) : (
                        <Image
                            src={placeholderImage}
                            alt={`Picture of ${props.product_name}`}
                            width={200}
                            height={250}
                        />
                    )}
                </div>
                <div className="absolute bottom-0">
                    <div
                        className="flex justify-center min-w-full"
                        onMouseEnter={() => setIsStockShown(true)}
                        onMouseLeave={() => setIsStockShown(false)}
                    >
                        <div
                            className="flex justify-center border border-solid border-darkpink rounded-full mt-4 px-1"
                            style={{ width: "fit-content" }}
                        >
                            {props.region && (
                                <svg
                                    className="h-17p w-17p fill-current my-auto"
                                    viewBox="0 0 20 20"
                                    fill="#673545"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        fill="#673545"
                                    />
                                </svg>
                            )}
                            {props.region && (
                                <p className="text-center text-sm whitespace-nowrap">
                                    {props.region}
                                </p>
                            )}
                            {props.vintage && (
                                <svg
                                    className="h-17p w-17p fill-current my-auto"
                                    viewBox="0 0 32 32"
                                    fill="#673545"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.3 29.28h-4.84v-7.29a9.77 9.77 0 004.33-1.8 8.28 8.28 0 003.4-6.94c0-4.92-1.52-9.35-2.17-11.02A1.87 1.87 0 0020.27 1h-9.5c-.79 0-1.5.5-1.77 1.26-.6 1.68-2 6.1-2 11 0 3.65 1.85 5.8 3.4 6.94a9.84 9.84 0 004.4 1.8v7.28H9.97a.85.85 0 00-.84.86c0 .47.38.86.84.86H21.3c.46 0 .83-.39.83-.86a.85.85 0 00-.83-.86zM10.56 2.86a.22.22 0 01.2-.14h9.51c.1 0 .17.05.2.14a32.1 32.1 0 011.62 5.77H9.07a33.8 33.8 0 011.5-5.77zm4.91 17.47c-.7 0-2.47-.32-4.1-1.52a6.54 6.54 0 01-2.7-5.56c0-.99.06-1.96.16-2.9h13.51c.1.93.18 1.9.18 2.9 0 2.36-.91 4.23-2.7 5.56a7.67 7.67 0 01-4.1 1.52h-.25zM24.04 31c.53 0 .96-.44.96-.99a.97.97 0 00-.96-.98.97.97 0 00-.96.98c0 .55.43.99.96.99z"
                                        fill="#673545"
                                    ></path>
                                </svg>
                            )}
                            {props.vintage && (
                                <p className="text-center text-sm whitespace-nowrap">
                                    {props.vintage}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="text-center text-gray-800 text-lg font-bold line-clamp-2 mt-2">
                        {props.product_name}
                    </div>
                    <div
                        className="relative min-w-full"
                        onMouseEnter={() => setIsAddBtnShown(true)}
                        onMouseLeave={() => setIsAddBtnShown(false)}
                    >
                        <div className="text-center text-gray-500 text-lg font-semibold text-center mt-4">
                            {props.in_stock
                                ? `$ ${props.retail_price_str}`
                                : ""}
                        </div>
                        <div
                            className="absolute top-0 right-0 min-w-full text-center"
                            style={{
                                display: isAddBtnShown ? "block" : "none",
                            }}
                        >
                            {!props.in_stock && (
                                <button
                                    className={`${styles.buttonFadeIn} bg-gray-400 text-white font-bold py-2 px-4 rounded`}
                                >
                                    Out of Stock
                                </button>
                            )}
                            {props.in_stock && (
                                <button
                                    onClick={() => {
                                        console.log(props);
                                    }}
                                    className={`${styles.buttonFadeIn} bg-pCardBtnActive active:bg-pCardBtnHover hover:bg-pCardBtnHover text-white font-bold py-2 px-4 rounded`}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
