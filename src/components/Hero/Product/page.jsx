'use client';

import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { Button } from '@/components/ui/button';
import { LiaCartPlusSolid } from "react-icons/lia";

export default function Product() {
    const { data, isLoading, error } =
        useFetch('https://api.escuelajs.co/api/v1/products/?categoryId=3');
    const discount = 0.09;

    const getDiscountPrice = (price) => {
        return (price - price * discount).toFixed(2);
    }

    if (isLoading) return <div className="w-full h-full justify-center items-center">Loading...</div>;
    if (error) return <div className="w-full h-full justify-center items-center">Error: {error.message}</div>;

    return (
        <section id="Projects"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 overflow-x-hidden">
            {data.map((product) => {
                return (
                    <div div key={product} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >

                        <div className="p-10">
                            <img src={product.images}
                                alt="Product"
                                className="w-72 h-72 object-contain rounded-t-xl"
                            />
                        </div>
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">${getDiscountPrice(product.price)}</p>
                                </del>
                            </div>
                            <div className="flex items-center">
                                <Button className="w-1/2 bg-textPrimary hover:bg-black">Buy Now</Button>
                                <LiaCartPlusSolid className="text-2xl ml-auto cursor-pointer" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
