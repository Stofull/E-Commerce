import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Catalog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  const catalogArticles = [
    {
      title: "Nike Air Max Dn",
      image: "https://i.imgur.com/06ixbfp.jpeg",
      content:
        "Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. This results in a futuristic design that's comfortable enough to wear from day to night. Go ahead—Feel the Unreal.",
    },
    {
      title: "Nike Dunk High By You",
      image: "https://i.imgur.com/KuR79SA.jpeg",
      content:
        "Take a seat at the table and add your special touch to the hoops-to-streets icon. Inspired by the outdoors, the customizable design lets you be as expressive as you want. Choose between canvas and suede accents for a healthy dose of trail-time flavor.",
    },
    {
      title: "Nike Air Force 1 Mid By You",
      image: "https://i.imgur.com/WHO8PRX.jpeg",
      content:
        "Let your design shine in satin, keep it classic in canvas, or get luxe with leather. No matter what you choose, these AF1s are all about you. 12 color choices and an additional gum option for the sole mean your design is destined to be one of a kind, just like you.",
    },
    {
      title: "Nike Revolution 7",
      image: "https://i.imgur.com/Q8OtD4x.jpeg",
      content:
        "We loaded the Revolution 7 with the sort of soft cushioning and support that might change your running world. Stylish as ever, comfortable when the rubber meets the road, and performative for your desired pace, it’s an evolution of a fan favorite that offers a soft, smooth ride.",
    },
    {
      title: "NikeCourt Legacy",
      image: "https://i.imgur.com/kXEn0B4.jpeg",
      content:
        "Honouring a history rooted in tennis culture, the Nike Court Legacy brings you a time-tested staple. Its pebbled upper, heritage stitching and retro Swoosh design let you blend sport and fashion. And, you get to do good by looking good.",
    },
    {
      title: "Nike Air Max 2013",
      image: "https://i.imgur.com/pBECNYq.png",
      content:
        "Back and just as stylish as ever. The Air Max 2013 returns with mesh detailing and sporty, no-sew overlays to help keep you looking and feeling fresh. Plus, tried-and-true Flywire lacing and classic full-length Air cushioning provide lasting comfort and support.",
    },
    {
      title: "Nike Structure 25",
      image: "https://i.imgur.com/3dlKFxT.jpeg",
      content:
        "The supportive cushioning provides steadiness for everyday runs. Experience a stable platform without sacrificing performance with a combination of Cushlon 3.0 foam and a Zoom Air unit. Plus, a higher stack height makes it more comfortable, stable and supportive than ever.",
    },
    {
      title: "Nike Impact 4",
      image: "https://i.imgur.com/6TJ40bi.jpeg",
      content:
        "Elevate your game and your hops. Charged with Max Air cushioning in the heel, this lightweight, secure shoe helps you get off the ground confidently and land comfortably. Plus, rubber wraps up the sides for added durability and stability",
    },
    {
      title: "Nike Zoom Fly 5",
      image: "https://i.imgur.com/qdW6VuF.jpeg",
      content:
        "Bridge the gap between your weekend training run and race day in a durable design that can be deployed not just at the starting line of your favorite race but in the days and months after your conquest. It offers comfort and reliability but with a propulsive sensation that’ll help you feel fast and fresh. ",
    },
  ];

  const openModal = (article) => {
    setCurrentArticle(article);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentArticle(null);
  };

  const openCartModal = () => {
    setCartModalIsOpen(true);
  };

  const closeCartModal = () => {
    setCartModalIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <div className="container mx-auto p-4">
          <button
            onClick={openCartModal}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
          >
            View Cart
          </button>
          <div className="flex flex-wrap gap-4">
            {catalogArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between w-[300px]"
              >
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full mb-4 rounded object-cover"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {article.content.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between">
                    <button className="bg-green-600 active:bg-green-300 text-white px-4 py-2 rounded">
                      Buy now
                    </button>
                    <button
                      onClick={() => openModal(article)}
                      className="bg-blue-500 active:bg-blue-300 text-white px-4 py-2 rounded"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {modalIsOpen && currentArticle && (
            <Modal onClose={closeModal}>
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-2">
                  {currentArticle.title}
                </h2>
                {currentArticle.image && (
                  <img
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    className="mb-4 max-w-full h-auto rounded max-h-[400px] object-contain"
                  />
                )}
                <p className="text-gray-700 mb-4 w-11/12">
                  {currentArticle.content}
                </p>
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white w-11/12 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </Modal>
          )}
          {cartModalIsOpen && (
            <Modal onClose={closeCartModal}>
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-2">Your Cart</h2>
                <div className="mb-4 w-full">
                  <div className="w-full flex justify-between items-center mb-2">
                    <span>Nike Air Max Dn</span>
                    <span>$150</span>
                    <img
                      src="https://i.imgur.com/06ixbfp.jpeg"
                      alt="Image 1"
                      className="mb-4 max-h-[200px] h-auto rounded object-contain"
                    />
                  </div>
                  <div className="w-full flex justify-between items-center mb-2">
                    <span>Nike Dunk High By You</span>
                    <span>$250</span>
                    <img
                      src="https://i.imgur.com/KuR79SA.jpeg"
                      alt="Image 1"
                      className="mb-4 max-h-[200px] h-auto rounded object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={closeCartModal}
                  className="bg-red-500 text-white w-11/12 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </Modal>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
