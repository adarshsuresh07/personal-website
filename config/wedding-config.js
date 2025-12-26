/**
 * =========================================
 * WEDDING CONFIGURATION FILE
 * =========================================
 * Edit this file to customize your wedding invitation.
 * After editing, the changes will reflect on your website.
 */

const WEDDING_CONFIG = {
  
  // ========== COUPLE INFORMATION ==========
  couple: {
    groom: {
      name: "Adarsh",
      photo: "./assets/images/cowo.webp"  // Replace with your groom's photo
    },
    bride: {
      name: "Haseena", 
      photo: "./assets/images/cewe.webp"  // Replace with your bride's photo
    }
  },

  // ========== WEDDING DATE & TIME ==========
  wedding: {
    date: "2025-12-31",           // Format: YYYY-MM-DD
    displayDate: "Saturday, December 31, 2025",
    ceremonyTime: "4:00 PM",
    receptionTime: "6:00 PM onwards"
  },

  // ========== VENUE INFORMATION ==========
  venue: {
    name: "Lakeside Gardens Estate",
    address: "1234 Garden View Drive, Lake Forest, CA 92630",
    googleMapsLink: "https://maps.google.com"
  },

  // ========== DRESS CODE ==========
  dressCode: "Garden Formal / Cocktail Attire",
  dressCodeColors: ["#FDFCFA", "#B8CDB8", "#8BA888"],  // Ivory, Sage Light, Sage Green

  // ========== LOVE STORY ==========
  loveStory: [
    {
      title: "☕ First Meeting",
      story: "It all began at a coffee shop on a rainy afternoon. Adarsh was working on his laptop when Haseena walked in, looking for shelter from the storm. The only empty seat was across from him. Their eyes met, and something magical happened."
    },
    {
      title: "💕 Falling in Love", 
      story: "Over the next few months, they discovered how perfectly they complemented each other. Movie nights, long walks in the park, and endless late-night conversations became their favorite things."
    },
    {
      title: "💍 The Proposal",
      story: "On a beautiful sunset evening at their favorite garden, Adarsh got down on one knee and asked Haseena to spend forever with him. With tears of joy in her eyes, she said 'Yes!'"
    }
  ],

  // ========== GALLERY IMAGES ==========
  // Add your photo URLs here (use local paths like ./assets/images/photo1.jpg)
  gallery: {
    carousel1: [
      "https://picsum.photos/1280/720?random=1",
      "https://picsum.photos/1280/720?random=2",
      "https://picsum.photos/1280/720?random=3"
    ],
    carousel2: [
      "https://picsum.photos/1280/720?random=4",
      "https://picsum.photos/1280/720?random=5",
      "https://picsum.photos/1280/720?random=6"
    ]
  },

  // ========== BACKGROUND IMAGE ==========
  backgroundImage: "./assets/images/bg.webp",

  // ========== SOCIAL ==========
  hashtag: "#AdarshAndHaseena2025",

  // ========== RSVP SETTINGS ==========
  rsvp: {
    deadline: "November 15, 2025",
    enabled: true
  }
};

// Export for use (if using modules)
if (typeof module !== 'undefined') {
  module.exports = WEDDING_CONFIG;
}

