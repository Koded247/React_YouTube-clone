import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import VideoCard from "./components/VideoCard";
import { videoData } from "./data";
import ShortsCard from "./components/ShortsCard";
import VideoCategory from "./components/VideoCategories";

function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <Navbar />

      {/* Body contents */}
      <section className="flex flex-row w-full h-[calc(100%-64px)]">
        <div className="w-2/12 h-full overflow-y-auto">
          {/* The left panel */}
          <LeftPanel />
        </div>

        <div className="w-10/12 overflow-y-auto">
          <VideoCategory />
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-8 p-4">
            {videoData.map((eachVideoData, index) => (
              <VideoCard
                key={index}
                videoThumbnail={eachVideoData.videoThumbnail}
                videoOwnerDp={eachVideoData.videoOwnerDp}
                videoOwnerName={eachVideoData.videoOwnerName}
                videoTitle={eachVideoData.videoTitle}
                userName={eachVideoData.userName}
                views={eachVideoData.views}
                uploadTime={eachVideoData.uploadTime}
              />
            ))}
          </div>

          {/* Shorts Container */}
          <div className="my-8 space-y-8">
            <header className="font-bold text-2xl">Shorts</header>
            <ShortsCard title={""} views={""} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
