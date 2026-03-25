/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add any external hosts you use for thumbnails or images here
    domains: [
      'i3.ytimg.com', // YouTube maxres thumbnails
      'i.ytimg.com',
      'img.youtube.com',
      'images.squarespace-cdn.com', // scholarship images copied from Squarespace
    ],
  },
};

module.exports = nextConfig;
