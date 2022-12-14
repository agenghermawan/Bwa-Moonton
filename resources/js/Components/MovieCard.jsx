import React from "react";
import PropType from "prop-types";

MovieCard.propTypes = {
    name: PropType.string.isRequired,
    slug: PropType.string.isRequired,
    category: PropType.string.isRequired,
    thumbnail: PropType.string.isRequired,
};

export default function MovieCard({ slug, name, category, thumbnail }) {
    return (
        <div>
            <div class="relative group overflow-hidden mr-[30px]">
                <img
                    src={thumbnail}
                    class="object-cover rounded-[30px] h-[340px] w-[250px]"
                    alt=""
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                    <div class="px-7 pb-7">
                        <div class="font-medium text-xl text-white">{name}</div>
                        <p class="mb-0 text-gray-300 text-base mt-[10px]">
                            {category}
                        </p>
                    </div>
                </div>
                <div
                    class="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500"
                >
                    <img
                        src="assets/icons/ic_play.svg"
                        class=""
                        width="50"
                        alt=""
                    />
                </div>
                <a href={slug} class="inset-0 absolute z-50"></a>
            </div>
        </div>
    );
}
