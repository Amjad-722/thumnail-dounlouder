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
     // The image URL you want to download
    const imageURL = thumbnailUrl;
    // Create an anchor element
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'downloaded_image.jpg'; // The name of the downloaded file
    // Append the anchor to the body
    document.body.appendChild(link);
    // Programmatically click the anchor
    link.click();
    // Remove the anchor from the document
    document.body.removeChild(link);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-700 p-4">
      <div className="bg-red-200 shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl text-blue-700 font-bold mb-4 text-center">YouTube Thumbnail Downloader</h1>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube Video URL"
          className="w-full p-2 border-2 border-gray-300  hover:border-stone-800 rounded mb-4"
        />
        {thumbnailUrl && (
          <div className="mb-4">
            <img
              src={thumbnailUrl}
              alt="YouTube Thumbnail"
              className="w-full rounded shadow"
            />
          </div>
        )}
        <button
          onClick={getThumbnail}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-2"
        >
          Get Thumbnail
        </button>
        {thumbnailUrl && (
          <button
            onClick={downloadThumbnail}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Download Thumbnail 
             
          </button>
        )}
      </div>
    </div>
  );
};

export default YDound;
