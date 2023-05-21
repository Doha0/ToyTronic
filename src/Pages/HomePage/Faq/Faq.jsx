import React from 'react';

const Faq = () => {
    return (
        <div>
            <section class="mx-4 mb-28">
                <h1 class="font-Garamond text-[#414040] text-center font-extrabold text-4xl mb-6">Frequently Asked Questions
                </h1>
                <p class="text-center font-normal text-base mb-16 text-[#707070]">There are many variations of passages of
                    Lorem Ipsum
                    available, but the majority have suffered alteration in some form, by injected humour.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 text-center gap-x-8 items-center justify-center">
                    <div>
                        <div tabindex="0" class="p-4 md:p-5 collapse collapse-plus rounded-box bg-faq mb-7 ">
                            <div class="collapse-title font-Garamond font-extrabold text-2xl">
                                1. Difference between flexbox and grid?
                            </div>
                            <div class="collapse-content">
                                <p class="text-[#707070]">The basic difference between Grid Layout and Flexbox Layout is
                                    that flexbox was
                                    designed for layout in one dimension and Grid was designed for
                                    two-dimensional layout.</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Faq;