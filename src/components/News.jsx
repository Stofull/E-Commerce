import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const News = () => {
  const newsArticles = [
    {
      title: "React 18 Released",
      date: "July 30, 2024",
      content:
        "React 18 has been officially released with new features and improvements including concurrent rendering, automatic batching, and more.",
      imageUrl: "https://reactjs.org/logo-og.png",
    },
    {
      title: "JavaScript Trends in 2024",
      date: "July 29, 2024",
      content:
        "The latest trends in JavaScript for 2024 include the rise of TypeScript, new features in ES2024, and the growing popularity of frameworks like Next.js and Svelte.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      title: "Web Development Best Practices",
      date: "July 28, 2024",
      content:
        "Adopting best practices in web development can improve performance, accessibility, and maintainability of your projects. This article explores key practices for 2024.",
      imageUrl: "https://i.imgur.com/45h3zso.png",
    },
    {
      title: "The Future of AI in Web Development",
      date: "July 27, 2024",
      content:
        "Artificial Intelligence is becoming more integrated into web development processes, from AI-powered design tools to automated testing and deployment.",
      imageUrl:
        "https://ares.decipherzone.com/blog-manager/uploads/banner_webp_895927bc-9c8a-41b1-b573-b46c74736447.webp",
    },
    {
      title: "Cybersecurity in 2024",
      date: "July 26, 2024",
      content:
        "With the increasing number of cyber threats, staying updated on the latest cybersecurity trends and practices is crucial for web developers and IT professionals.",
      imageUrl: "https://i.imgur.com/ZDgsblJ.jpeg",
    },
    {
      title: "Introduction to Next.js 13",
      date: "July 25, 2024",
      content:
        "Next.js 13 introduces new features like improved server-side rendering, faster builds, and enhanced developer experience.",
      imageUrl: "https://i.imgur.com/ThW99OX.jpeg",
    },
    {
      title: "CSS Frameworks Comparison 2024",
      date: "July 24, 2024",
      content:
        "This article compares the most popular CSS frameworks in 2024, including Tailwind CSS, Bootstrap, and Bulma.",
      imageUrl: "https://i.imgur.com/87LZb80.jpeg",
    },
    {
      title: "Understanding WebAssembly",
      date: "July 23, 2024",
      content:
        "WebAssembly is revolutionizing web performance by allowing developers to run compiled code in the browser at near-native speed.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg",
    },
    {
      title: "Building Progressive Web Apps",
      date: "July 22, 2024",
      content:
        "Progressive Web Apps (PWAs) offer a great user experience by combining the best of web and mobile apps. Learn how to build PWAs in 2024.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    },
    {
      title: "GraphQL vs REST APIs",
      date: "July 21, 2024",
      content:
        "GraphQL and REST are two popular ways to build APIs. This article explores the differences, advantages, and use cases for each approach.",
      imageUrl: "https://i.imgur.com/6BUOChl.png",
    },
  ];

  return (
    <>
      <Navbar />
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Latest News
        </h1>
      <div className="news-container grid grid-cols-3 mx-auto p-6">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-3xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{article.date}</p>
            <p className="text-gray-700 leading-relaxed">{article.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default News;
