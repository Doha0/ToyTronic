import React from 'react';
import faqImg from '../../../assets/faq.jpg';

const Faq = () => {
    return (
        <div>
            <section className="my-16 lg:my-32">
                <h1 className=" text-center font-semibold text-4xl my-10">Frequently Asked Questions</h1>
                <p className="text-center font-medium text-base mb-6 mx-4 lg:mx-40 px-2 lg:px-24">We understand that you may have some questions regarding our website and the services we offer. To help you find the information you need quickly and conveniently,
                    we have compiled a list of frequently asked questions (FAQs). These FAQs cover various aspects such as placing orders, payment methods, shipping, returns, product safety, and customer support.
                </p>

                <div className="grid grid-cols-1 text-center gap-x-8 items-center justify-center mx-4 lg:mx-40 px-2 lg:px-24">



                    <div>

                        <div tabIndex="0" className="p-4 md:p-5 collapse collapse-plus bg-sky-100 rounded-box mb-7 ">
                            <div className="collapse-title font-semibold text-2xl">
                                How can I place an order on the Toy Tronic website?
                            </div>
                            <div className="collapse-content">
                                <p>To place an order, simply browse through our collection of toys, select the items you wish to purchase, add them to your cart, and proceed to the checkout page. Follow the prompts to provide your shipping information and complete the payment process.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="p-4 md:p-5 collapse collapse-plus bg-sky-100 rounded-box mb-7 ">
                            <div className="collapse-title font-semibold text-2xl">
                                What payment methods are accepted on the Toy Tronic store?
                            </div>
                            <div className="collapse-content">
                                <p>We offer a variety of convenient payment options. You can securely pay for your toys using major credit/debit cards, including Visa, Mastercard, and American Express. We also accept PayPal, allowing you to make purchases with ease and confidence. Rest assured, all payment transactions are encrypted and safeguarded to protect your personal information.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="p-4 md:p-5 collapse collapse-plus bg-sky-100 rounded-box mb-7 ">
                            <div className="collapse-title font-semibold text-2xl">
                                What is the return policy for toys purchased from Toy Tronic?
                            </div>
                            <div className="collapse-content">
                                <p>We want you to be completely satisfied with your toy purchase. If for any reason you are not happy with your order, we offer a hassle-free 14-day return policy. You can initiate a return by contacting our customer support team or visiting our Returns and Refunds page. Please ensure the toys are in their original condition and packaging for a smooth return process.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="p-4 md:p-5 collapse collapse-plus bg-sky-100 rounded-box mb-7 ">
                            <div className="collapse-title font-semibold text-2xl">
                                Are the toys on the website safe for children of all ages?
                            </div>
                            <div className="collapse-content">
                                <p>The safety of our customers, especially children, is of utmost importance to us. We take great care to ensure that all our toys meet strict safety standards and regulations. Each toy on our website is labeled with an age recommendation, helping you choose toys appropriate for your child's age and developmental stage. Additionally, we regularly monitor and update our inventory to provide you with the latest and safest toys available in the market.</p>
                            </div>
                        </div>

                        <div tabIndex="0" className="p-4 md:p-5 collapse collapse-plus bg-sky-100 rounded-box mb-7 ">
                            <div className="collapse-title font-semibold text-2xl">
                                How do I contact customer support?
                            </div>
                            <div className="collapse-content">
                                <p>If you need to contact our customer support team, we provide multiple channels for your convenience. You can reach out to us by sending an email to support@toytronic.com or by calling our customer support hotline at +1-800-123-4567. Additionally, you can engage in real-time conversation through our live chat feature on our website, accessible at the bottom right corner. If you prefer to leave a message, you can fill out the online contact form on our website, and our team will respond to you promptly. We value your inquiries, feedback, and concerns, and our dedicated support agents are here to assist you and provide the assistance you need.</p>
                            </div>
                        </div>




                    </div>

                </div>

            </section>
        </div>
    );
};

export default Faq;