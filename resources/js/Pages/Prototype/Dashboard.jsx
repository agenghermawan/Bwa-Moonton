import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
    const array = [1, 2, 3, 4, 5];
    const Flickty = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <>
            <Authenticated>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title> Dashboard </title>
                </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={Flickty}>
                        {array.map((number) => (
                            <FeaturedMovie
                                key={number}
                                name={"Batman In Love"}
                                slug={"the-batman-in-love"}
                                category={"Action"}
                                thumbnail={"/assets/images/featured-1.png"}
                                rating={number + 1}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div class="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={Flickty}>
                        {[1, 2, 3, 4, 5].map((number) => (
                            <MovieCard
                                key={number}
                                name={"Batman"}
                                slug={"the-batman"}
                                category={"Action"}
                                thumbnail={"/assets/images/browse-1.png"}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
