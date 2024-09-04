import React, { useState } from 'react';

const YDound = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const getVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+?&v=)([^&]{11})|youtu\.be\/([^&]{11})/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  };

  const getThumbnail = () => {
    const videoId = getVideoId(videoUrl);
    if (videoId) {
      const url = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      setThumbnailUrl(url);
    } else {
      alert('Invalid YouTube URL');
    }
  };
  const downloadThumbnail = () => {
     
    const imageURL = thumbnailUrl;
    
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'downloaded_image.jpg'; 
 
    document.body.appendChild(link);
    
    link.click();
   
    document.body.removeChild(link);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center  bg-purple-800 justify-center p-4">
      <div className="bg-red-200 flex justify-center items-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  shadow-md w-3/5 rounded-lg p-6 ">
        <h1 className="text-2xl text-black font-extrabold  mb-4 text-center">YouTube Thumbnail Downloader</h1>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube Video URL"
          className=" p-2 border-2 border-gray-300  hover:border-pink-700 rounded mb-4 bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl  font-medium "
        />
        {thumbnailUrl && (
          <div className="mb-4">
            <img
              src={thumbnailUrl}
              alt="YouTube Thumbnail"
              className="w-full rounded shadow border-2"
            />
          </div>
        )}
        <button
          onClick={getThumbnail}
          className="bg-gradient-to-b from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
        >
          Get Thumbnail
        </button>
        {thumbnailUrl && (
         <button
         onClick={downloadThumbnail}
         className="relative text-[15px] px-[2.7em] py-[0.7em] tracking-[0.06em] font-inherit  rounded-[0.6em] bg-black overflow-hidden transition-all duration-300 leading-[1.4em] border-2 border-[#1BFD9C] text-[#1BFD9C] bg-gradient-to-r from-[rgba(27,253,156,0.1)] via-transparent to-[rgba(27,253,156,0.1)] mt-4 hover:text-[#82ffc9] hover:shadow-[inset_0_0_10px_rgba(27,253,156,0.6),_0_0_9px_3px_rgba(27,253,156,0.2)]">
         Get it now
         <span className="absolute left-[-4em] top-0 w-[4em] h-full transition-transform duration-400 ease-in-out bg-gradient-to-r from-transparent via-[rgba(27,253,156,0.1)] to-transparent group-hover:transform translate-x-[15em]"></span>
     </button>
     
        )}
      </div>
    </div>
  );
};

export default YDound;
