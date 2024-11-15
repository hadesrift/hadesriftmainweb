// script.js

// YouTube API Key and Channel ID
const API_KEY = "AIzaSyBpW4RE11YybhSTgvTZRWX8FSItw2NGBvs";
const CHANNEL_ID = "UC4NsCPOo3pv9j7ZwR2AMV3w";
// Fetch and display all videos from the YouTube channel
async function loadVideos() {
  const videoGallery = document.getElementById("video-gallery");

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=10`
    );
    const data = await response.json();

    // Loop through each video and create an iframe
    data.items.forEach((item) => {
      const videoId = item.id.videoId;
      const videoFrame = document.createElement("iframe");
      videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
      videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      videoGallery.appendChild(videoFrame);
    });
  } catch (error) {
    console.error("Error loading videos:", error);
    videoGallery.innerHTML = "<p>Failed to load videos.</p>";
  }
}

// Initialize video loading on page load
document.addEventListener("DOMContentLoaded", loadVideos);
