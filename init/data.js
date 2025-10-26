const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: ['Beaches', 'Amazing View'],
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: ["Iconic Cities", "Rooms"],
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: ["Mountains", "Cabins"],
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: ["Farms", "Amazing View"],
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: ["Forests", "Camping"],
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: ["Beaches", "Trending"],
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: ["Cabins", "Amazing View"],
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: ["Iconic Cities", "Amazing View", "Trending"],
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: ["Mountains", "Trending"],
    geometry: { type: "Point", coordinates: [7.2265, 46.0961] }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: ["Trending", "Farms"],
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: ["Iconic Cities", "Trending"],
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: ["Beaches", "Amazing View"],
    geometry: { type: "Point", coordinates: [178.065, -17.7134] }
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: ["Farms", "Forests"],
    geometry: { type: "Point", coordinates: [-1.7782, 51.8330] }
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: ["Iconic Cities", "Rooms"],
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: ["Beaches", "Amazing Pools"],
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Glass Igloo Under the Northern Lights",
    description: "Sleep under the stars and Northern Lights in a cozy glass igloo in the Arctic Circle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Rovaniemi",
    country: "Finland",
    category: ["Arctic", "Trending"],
    geometry: { type: "Point", coordinates: [25.7482, 66.5039] }
  },
  {
    title: "Countryside Farmhouse",
    description: "Enjoy the slow life at this rustic farmhouse surrounded by lush greenery and open fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Punjab",
    country: "India",
    category: ["Farms", "Trending"],
    geometry: { type: "Point", coordinates: [75.3412, 31.1471] }
  },
  {
    title: "Treetop Cabin with Panoramic Views",
    description: "A breathtaking treetop escape surrounded by misty forests and a scenic mountain backdrop.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1649570155908-d6b35b9d7bbc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    price: 950,
    location: "Ooty",
    country: "India",
    category: ["Forests", "Cabins"],
    geometry: { type: "Point", coordinates: [76.6932, 11.4064] }
  },
  {
    title: "Charming Desert Camp",
    description: "Sleep under the stars in the vast desert in luxury tents with cultural performances.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1677836157562-5e24481b6b69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    price: 850,
    location: "Jaisalmer",
    country: "India",
    category: ["Camping", "Trending", "Amazing View"],
    geometry: { type: "Point", coordinates: [70.9160, 26.9157] }
  },
  {
    title: "Royal Castle Stay",
    description: "Live like royalty in this magnificent castle surrounded by gardens and ancient architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1565017058424-77a08dcd6aff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    price: 5000,
    location: "Edinburgh",
    country: "Scotland",
    category: ["Castles", "Iconic Cities", "Rooms"],
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] }
  },
  {
    title: "Lakeside Cabin Retreat",
    description: "Wake up to the sound of waves and enjoy kayaking in this serene lakeside cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622315173972-2bee16732128?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    price: 1100,
    location: "Nainital",
    country: "India",
    category: ["Cabins", "Amazing View", "Trending"],
    geometry: { type: "Point", coordinates: [79.4636, 29.3803] }
  },
  {
    title: "Skyline Apartment",
    description: "Enjoy stunning skyline views and a private pool from this high-rise apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: ["Iconic Cities", "Amazing Pools", "Trending", "Rooms"],
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Modern Villa with Infinity Pool",
    description: "Relax in style in this stunning villa featuring an infinity pool overlooking the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Phuket",
    country: "Thailand",
    category: ["Beaches", "Amazing Pools", "Trending", "Rooms"],
    geometry: { type: "Point", coordinates: [98.3984, 7.8804] }
  },
  {
    title: "Luxury Yurt Stay",
    description: "Experience glamping at its finest in this luxurious yurt with all modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1604784805879-0de1ec9d78c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1090",
    },
    price: 950,
    location: "Leh",
    country: "India",
    category: ["Camping", "Trending"],
    geometry: { type: "Point", coordinates: [77.5619, 34.1526] }
  },
  {
    title: "Seaside Cabin",
    description: "A quiet seaside retreat with a private deck and panoramic ocean views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1686231456293-65507f75a48a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1090",
    },
    price: 1700,
    location: "Goa",
    country: "India",
    category: ["Beaches", "Cabins"],
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
  {
    title: "Mountain View Glass House",
    description: "A modern glass house offering breathtaking views of the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Manali",
    country: "India",
    category: ["Mountains", "Amazing View"],
    geometry: { type: "Point", coordinates: [77.1887, 32.2432] }
  },
  {
    title: "Tropical Island Villa",
    description: "A luxury villa surrounded by turquoise waters and white sand beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: ["Beaches", "Amazing Pools", "Trending"],
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Frozen Wonderland Cabin",
    description: "Experience the thrill of living in a frozen landscape inside a warm, cozy cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Tromsø",
    country: "Norway",
    category: ["Arctic", "Cabins"],
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] }
  },
  {
    title: "Forest Cabin Hideaway",
    description: "A peaceful hideaway deep in the woods, perfect for relaxation and hiking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Coorg",
    country: "India",
    category: ["Forests", "Cabins"],
    geometry: { type: "Point", coordinates: [75.7397, 12.3375] }
  },
  {
    title: "Countryside Barn Loft",
    description: "A rustic barn loft renovated into a cozy living space surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1725138187136-790dc99ed924?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 1300,
    location: "Vermont",
    country: "United States",
    category: ["Farms", "Trending"],
    geometry: { type: "Point", coordinates: [-72.5778, 44.5588] }
  },
  {
    title: "Romantic Room in Paris",
    description: "A cozy room in the heart of Paris, perfect for couples exploring the City of Love.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Paris",
    country: "France",
    category: ["Iconic Cities", "Rooms"],
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Snow Cabin with Fireplace",
    description: "Warm up by the fire after a day of skiing in this charming snow cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548704806-0c20f7ea6474?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    },
    price: 2000,
    location: "Gulmarg",
    country: "India",
    category: ["Mountains", "Cabins"],
    geometry: { type: "Point", coordinates: [74.3805, 34.0484] }
  },
  {
    title: "Hot Spring Retreat",
    description: "Rejuvenate in natural hot springs surrounded by mountains and forests.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/911911136/photo/cherry-blossom-arashiyama-in-spring-kyoto-japan.webp?a=1&s=612x612&w=0&k=20&c=ze10OAICmqke6SBoRs9pvknz1R0s7DaaM2_Bmoh6zsk=",
    },
    price: 2700,
    location: "Hakone",
    country: "Japan",
    category: ["Trending", "Amazing Pools"],
    geometry: { type: "Point", coordinates: [139.002, 35.2323] }
  }
];


module.exports = { data: sampleListings };
