// VideoSessionService.js
const VideoSessionService = {
    startVideoSession: async (sessionId) => {
      // Simulate starting a video session
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, sessionUrl: `https://example.com/session/${sessionId}` });
        }, 2000); // Simulating a delay for starting the session
      });
    },
  };
  
  export default VideoSessionService;
  