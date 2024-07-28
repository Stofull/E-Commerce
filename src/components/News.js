import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import Navbar from "./Navbar";

const News = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  const newsArticles = [
    {
      title: "Article 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      title: "Article 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      title: "Article 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsArticles.map((article, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">
                {article.content.substring(0, 100)}...
              </p>
              <button
                onClick={() => openModal(article)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="News Article"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <div className="p-4">
              {currentArticle && (
                <>
                  <h2 className="text-2xl font-semibold mb-2">
                    {currentArticle.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{currentArticle.content}</p>
                  <button
                    onClick={closeModal}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default News;
