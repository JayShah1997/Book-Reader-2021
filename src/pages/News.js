import React, { useState, useEffect } from "react";
import Loading from "../components/Loader";
import newsData from "./../utils/news-data.json";

const responsiveVoice = window.responsiveVoice;

const News = () => {
  const [news, setNews] = useState();
  const apiKey = "04a4563ab46943148b5877ec28e0c92d";
  const fetchFromApi = true;
  const api_url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

  useEffect(() => {
    if (fetchFromApi) {
      async function fetchNews() {
        const res = await fetch(api_url);
        const data = await res.json();
        setNews(data.articles);
      }

      fetchNews();
    } else {
      if (!news) {
        setNews(newsData.news[0].article);
      }
    }
  }, []);

  if (!news) {
    return (
      <div style={{ height: "85vh" }}>
        <Loading />
      </div>
    );
  } else {
    return (
      <div style={{ minheight: "85vh" }}>
        <h1
          className="text-6xl text-center my-16 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500"
          onMouseEnter={() => responsiveVoice.speak("News")}
          onMouseLeave={() => responsiveVoice.cancel()}
        >
          News
        </h1>

        <div className="mt-0 grid grid-cols-3 gap-16 relative z-10">
          {news.map((newsItem) => (
            <div
              className="flex flex-col bg-white rounded-lg shadow-lg"
              style={{ height: "100%" }}
              onMouseEnter={() => responsiveVoice.speak(newsItem.title)}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              <img
                src={newsItem.urlToImage}
                className="rounded-t-lg"
                style={{ height: "75%" }}
              />

              <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-gray-700">
                  {newsItem.title.slice(0, 60).trim() + "..."}
                </h2>

                <a
                  className="text-blue-700 hover:text-blue-800 hover:underline transition duration-500 text-sm self-end"
                  href={newsItem.url}
                  target="_blank"
                  onMouseEnter={() => responsiveVoice.speak("Read More")}
                  onMouseLeave={() => responsiveVoice.cancel()}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default News;
