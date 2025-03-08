import React from "react";

const Faq = () => {
  return (
    <div className="md:py-28 ">
      <h2 className="text-3xl text-center font-semibold">Frequently Asked Questions</h2>
      <p className="text-lg my-4 text-center"> Got Questions? We’ve Got Answers!</p>
      <div className="flex flex-col justify-between gap-10 mt-10 md:max-w-4xl md:mx-auto">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">What is TechGear Hub?</h3>
          <p className="text-gray-600">
            TechGear Hub is a one-stop-shop for all your tech needs. We offer a wide range of products from laptops, desktops, smartphones, and more.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">How can I track my order?</h3>
          <p className="text-gray-600">
            You can track your order by visiting the{" "}
            <a href="#track-order" className="text-blue-500">
              Track Order
            </a>{" "}
            page and entering your order number.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
          <p className="text-gray-600">We accept all major credit and debit cards, including Visa, Mastercard, and American Express.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Do you offer international shipping?</h3>
          <p className="text-gray-600">
            Yes! We ship worldwide with reliable courier partners. Please visit our{" "}
            <a href="#shipping" className="text-blue-500">
              Shipping
            </a>{" "}
            page for more information.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold"> What is your return policy?</h3>
          <p className="text-gray-600">We offer a 30-day hassle-free return policy. If you’re not satisfied, you can return your item for a full refund</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
