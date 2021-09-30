import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { products } from "@/exampleProductData";
import { ProductTypesense } from "@/interfaces";

type CarouselPageProps = {
    productList: ProductTypesense[];
};

const CarouselShowcasePage: NextPage<CarouselPageProps> = ({ productList }) => (
    <>
        <div className="container mx-auto">
            <Head>
                <title>Product Carousel Showcase Page</title>
                <meta
                    name="description"
                    content="TypeScript starter for Next.js that includes all you need to build amazing apps"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Product Carousel</h1>

                <div>
                    <ul>
                        {productList.map((product) => (
                            <li key={product.id}>{product.product_name}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    </>
);

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { productList: products },
        revalidate: 60,
    };
};

export default CarouselShowcasePage;
