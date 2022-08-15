import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";

export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <div class="ml-[300px] px-[50px]">
                <div class="py-20 flex flex-col items-center">
                    <div class="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p class="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>
                    <div class="flex justify-center gap-10 mt-[70px]">
                        <SubscriptionCard
                            name="Basic"
                            price={299000}
                            durationInMonth={3}
                            features={["Feature 1", "Feature 2", "Feature 3"]}
                        />
                        <SubscriptionCard
                            isPremium
                            name="Premium"
                            price={299000}
                            durationInMonth={6}
                            features={["Feature 1", "Feature 2", "Feature 3"]}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
