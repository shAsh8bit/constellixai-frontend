// Sample big JSON data for testing purposes
export const bigJsonTestResult = {
  "products": [
    {
      "id": "p001",
      "name": "Ultra HD Smart TV",
      "brand": "TechVision",
      "category": "Electronics",
      "price": 1299.99,
      "discountPercentage": 15,
      "rating": 4.8,
      "stock": 42,
      "tags": ["4K", "Smart TV", "HDR", "Voice Control"],
      "features": [
        "65-inch OLED Display",
        "4K Ultra HD Resolution",
        "HDR10+ Support",
        "AI Picture Enhancement",
        "Voice Assistant Compatible",
        "Bluetooth 5.0",
        "WiFi 6 Support",
        "4 HDMI Ports"
      ],
      "specifications": {
        "dimensions": {
          "width": 144.8,
          "height": 83.6,
          "depth": 5.9,
          "unit": "cm"
        },
        "weight": {
          "value": 21.3,
          "unit": "kg"
        },
        "powerConsumption": {
          "standby": 0.5,
          "active": 145,
          "unit": "W"
        },
        "refreshRate": 120,
        "resolution": "3840 x 2160"
      },
      "connectivity": {
        "hdmi": 4,
        "usb": 3,
        "ethernet": 1,
        "bluetooth": true,
        "wifi": true,
        "opticalAudio": true
      },
      "warranty": {
        "period": 24,
        "unit": "months",
        "type": "manufacturer"
      },
      "inStock": true,
      "images": [
        "/images/products/tv-front.jpg",
        "/images/products/tv-side.jpg",
        "/images/products/tv-ports.jpg",
        "/images/products/tv-remote.jpg"
      ],
      "reviews": [
        {
          "userId": "u2945",
          "username": "TechEnthusiast",
          "rating": 5,
          "date": "2025-01-15",
          "verified": true,
          "title": "Amazing picture quality",
          "comment": "The colors are vibrant and the blacks are truly deep. Best TV I've ever owned."
        },
        {
          "userId": "u8763",
          "username": "MovieBuff",
          "rating": 4,
          "date": "2025-02-03",
          "verified": true,
          "title": "Great for movies, slight lag for gaming",
          "comment": "Perfect for watching movies but I noticed minor lag when playing fast-paced games."
        },
        {
          "userId": "u3321",
          "username": "SmartHomeGuru",
          "rating": 5,
          "date": "2025-02-22",
          "verified": true,
          "title": "Perfect integration with my smart home",
          "comment": "Works flawlessly with all my other smart devices. Voice control is responsive."
        }
      ]
    },
    {
      "id": "p002",
      "name": "Professional DSLR Camera",
      "brand": "CaptureMax",
      "category": "Photography",
      "price": 2499.99,
      "discountPercentage": 8,
      "rating": 4.9,
      "stock": 15,
      "tags": ["DSLR", "Professional", "Photography", "4K Video"],
      "features": [
        "45.7 Megapixel Full-Frame Sensor",
        "EXPEED 7 Image Processor",
        "ISO Range 64-25600",
        "4K UHD Video Recording",
        "3.2-inch Tilting Touchscreen LCD",
        "Wi-Fi and Bluetooth Connectivity",
        "Weather-Sealed Body",
        "Dual Memory Card Slots"
      ],
      "specifications": {
        "dimensions": {
          "width": 14.5,
          "height": 11.5,
          "depth": 7.6,
          "unit": "cm"
        },
        "weight": {
          "value": 915,
          "unit": "g"
        },
        "sensorType": "Full-Frame CMOS",
        "batteryLife": {
          "shots": 1840,
          "videoMinutes": 120
        },
        "mountType": "Standard F Mount"
      },
      "connectivity": {
        "usb": "USB-C 3.1",
        "hdmi": "Mini HDMI",
        "audioIn": true,
        "audioOut": true,
        "wifi": true,
        "bluetooth": true,
        "gps": true
      },
      "warranty": {
        "period": 36,
        "unit": "months",
        "type": "limited manufacturer"
      },
      "inStock": true,
      "images": [
        "/images/products/camera-front.jpg",
        "/images/products/camera-top.jpg",
        "/images/products/camera-back.jpg",
        "/images/products/camera-lens.jpg"
      ],
      "reviews": [
        {
          "userId": "u7623",
          "username": "ProPhotographer",
          "rating": 5,
          "date": "2025-01-18",
          "verified": true,
          "title": "Best camera for professional work",
          "comment": "I use this for wedding photography and the results are outstanding. Clients love the image quality."
        },
        {
          "userId": "u9842",
          "username": "TravelVlogger",
          "rating": 5,
          "date": "2025-03-05",
          "verified": true,
          "title": "Perfect for my travel videos",
          "comment": "The 4K video is crisp and the stabilization is fantastic. Battery life is impressive too."
        }
      ]
    },
    {
      "id": "p003",
      "name": "Wireless Noise-Cancelling Headphones",
      "brand": "AudioElite",
      "category": "Audio",
      "price": 349.99,
      "discountPercentage": 12,
      "rating": 4.7,
      "stock": 78,
      "tags": ["Wireless", "Noise-Cancelling", "Over-Ear", "Premium"],
      "features": [
        "Active Noise Cancellation Technology",
        "40mm Dynamic Drivers",
        "Bluetooth 5.2 Connectivity",
        "30-Hour Battery Life",
        "Quick Charge (5 hours in 10 minutes)",
        "Built-in Microphone",
        "Touch Controls",
        "Ambient Sound Mode"
      ],
      "specifications": {
        "dimensions": {
          "width": 17.2,
          "height": 19.8,
          "depth": 8.1,
          "unit": "cm"
        },
        "weight": {
          "value": 254,
          "unit": "g"
        },
        "frequency": {
          "min": 4,
          "max": 40000,
          "unit": "Hz"
        },
        "impedance": 32,
        "sensitivity": 110,
        "batteryCapacity": 700
      },
      "connectivity": {
        "bluetooth": "5.2",
        "nfc": true,
        "analogAudio": "3.5mm",
        "usbCharging": "USB-C",
        "codecs": ["SBC", "AAC", "aptX", "LDAC"]
      },
      "warranty": {
        "period": 24,
        "unit": "months",
        "type": "standard"
      },
      "inStock": true,
      "colors": ["Black", "Silver", "Midnight Blue", "Rose Gold"],
      "images": [
        "/images/products/headphones-front.jpg",
        "/images/products/headphones-side.jpg",
        "/images/products/headphones-folded.jpg",
        "/images/products/headphones-case.jpg"
      ],
      "reviews": [
        {
          "userId": "u1275",
          "username": "AudiophileGuy",
          "rating": 5,
          "date": "2025-02-10",
          "verified": true,
          "title": "Incredible sound quality and ANC",
          "comment": "These headphones block out almost all ambient noise. The sound stage is wide and detailed."
        },
        {
          "userId": "u5542",
          "username": "FrequentFlyer",
          "rating": 5,
          "date": "2025-01-30",
          "verified": true,
          "title": "Perfect for long flights",
          "comment": "Wore these on a 14-hour flight and they were comfortable the whole time. Great battery life too."
        },
        {
          "userId": "u2358",
          "username": "WorkFromHome",
          "rating": 4,
          "date": "2025-03-12",
          "verified": true,
          "title": "Great for focus, microphone could be better",
          "comment": "These are perfect for concentration, but the microphone quality during calls is just average."
        }
      ]
    },
    {
      "id": "p004",
      "name": "Ultrabook Pro X",
      "brand": "TechWave",
      "category": "Computers",
      "price": 1799.99,
      "discountPercentage": 10,
      "rating": 4.6,
      "stock": 23,
      "tags": ["Laptop", "Ultrabook", "Business", "Thin & Light"],
      "features": [
        "14-inch 4K OLED Display",
        "Intel Core i9 Processor, 12th Gen",
        "32GB DDR5 RAM",
        "1TB NVMe SSD",
        "NVIDIA RTX 3060 Graphics",
        "Thunderbolt 4 Ports",
        "Fingerprint Sensor",
        "Backlit Keyboard"
      ],
      "specifications": {
        "dimensions": {
          "width": 31.9,
          "height": 21.7,
          "depth": 1.59,
          "unit": "cm"
        },
        "weight": {
          "value": 1.35,
          "unit": "kg"
        },
        "batteryLife": {
          "value": 15,
          "unit": "hours"
        },
        "processor": {
          "brand": "Intel",
          "model": "Core i9-12900H",
          "cores": 14,
          "threads": 20,
          "speed": 4.9,
          "unit": "GHz"
        },
        "display": {
          "type": "OLED",
          "resolution": "3840 x 2160",
          "refreshRate": 60,
          "touchscreen": true
        }
      },
      "connectivity": {
        "usb": ["2x USB-A 3.2", "2x USB-C Thunderbolt 4"],
        "hdmi": "2.1",
        "audioJack": true,
        "ethernet": false,
        "wifi": "6E",
        "bluetooth": "5.2",
        "cardReader": "SD"
      },
      "warranty": {
        "period": 36,
        "unit": "months",
        "type": "premium care"
      },
      "inStock": true,
      "colors": ["Silver", "Space Gray"],
      "images": [
        "/images/products/laptop-front.jpg",
        "/images/products/laptop-open.jpg",
        "/images/products/laptop-side.jpg",
        "/images/products/laptop-ports.jpg"
      ],
      "operatingSystem": "Windows 11 Pro",
      "reviews": [
        {
          "userId": "u4872",
          "username": "TechConsultant",
          "rating": 5,
          "date": "2025-02-05",
          "verified": true,
          "title": "Perfect workstation replacement",
          "comment": "Handles all my development tasks smoothly. The 4K screen is gorgeous for design work."
        },
        {
          "userId": "u2194",
          "username": "DataScientist",
          "rating": 4,
          "date": "2025-01-25",
          "verified": true,
          "title": "Excellent for ML tasks on the go",
          "comment": "Runs my machine learning models surprisingly well for such a thin laptop. Fan noise can get loud under heavy load."
        },
        {
          "userId": "u7361",
          "username": "Entrepreneur",
          "rating": 5,
          "date": "2025-03-10",
          "verified": true,
          "title": "Sleek design with powerful performance",
          "comment": "Impresses clients when I pull it out in meetings, and handles multiple virtual machines without breaking a sweat."
        }
      ]
    },
    {
      "id": "p005",
      "name": "Smart Fitness Watch Pro",
      "brand": "FitTech",
      "category": "Wearables",
      "price": 299.99,
      "discountPercentage": 20,
      "rating": 4.5,
      "stock": 52,
      "tags": ["Fitness", "Smartwatch", "Health Tracking", "GPS"],
      "features": [
        "1.4-inch AMOLED Display",
        "Advanced Health Tracking",
        "Built-in GPS",
        "Heart Rate Monitor",
        "Blood Oxygen Sensor",
        "Sleep Tracking",
        "5 ATM Water Resistance",
        "10-day Battery Life"
      ],
      "specifications": {
        "dimensions": {
          "width": 4.5,
          "height": 4.5,
          "depth": 1.2,
          "unit": "cm"
        },
        "weight": {
          "value": 38,
          "unit": "g"
        },
        "display": {
          "type": "AMOLED",
          "size": 1.4,
          "unit": "inch",
          "resolution": "454 x 454"
        },
        "sensors": [
          "Accelerometer",
          "Gyroscope",
          "Heart Rate",
          "SpO2",
          "Temperature",
          "Barometer",
          "Ambient Light"
        ],
        "batteryCapacity": 420,
        "waterResistance": "5 ATM"
      },
      "connectivity": {
        "bluetooth": "5.0",
        "wifi": true,
        "nfc": true,
        "gps": true,
        "cellularData": false
      },
      "warranty": {
        "period": 12,
        "unit": "months",
        "type": "standard"
      },
      "inStock": true,
      "colors": ["Black", "Silver", "Blue", "Green"],
      "images": [
        "/images/products/watch-front.jpg",
        "/images/products/watch-side.jpg",
        "/images/products/watch-back.jpg",
        "/images/products/watch-band.jpg"
      ],
      "compatibleWith": ["Android 6.0+", "iOS 10.0+"],
      "reviews": [
        {
          "userId": "u6254",
          "username": "FitnessCoach",
          "rating": 5,
          "date": "2025-01-20",
          "verified": true,
          "title": "Perfect training companion",
          "comment": "The heart rate accuracy is impressive compared to my chest strap. GPS tracking is spot on for runs."
        },
        {
          "userId": "u9137",
          "username": "YogaTeacher",
          "rating": 4,
          "date": "2025-02-15",
          "verified": true,
          "title": "Great for monitoring stress levels",
          "comment": "I use this with my clients to show them real-time stress reduction during meditation. Battery life is excellent."
        },
        {
          "userId": "u4519",
          "username": "WeekendHiker",
          "rating": 4,
          "date": "2025-03-01",
          "verified": true,
          "title": "Reliable for outdoor activities",
          "comment": "Holds up well on trails and the altimeter is surprisingly accurate. The screen could be brighter in direct sunlight."
        }
      ]
    }
  ],
  "metadata": {
    "totalItems": 5,
    "itemsPerPage": 5,
    "totalPages": 1,
    "currentPage": 1,
    "timestamp": "2025-05-12T18:30:45Z",
    "currency": "USD",
    "version": "1.0.3",
    "queryTime": "0.236s",
    "filters": {
      "applied": ["category", "price", "rating"],
      "available": ["brand", "tags", "color", "stock", "discountPercentage"]
    },
    "sortedBy": {
      "field": "price",
      "order": "descending"
    }
  },
  "relatedCategories": [
    {
      "name": "Audio",
      "productCount": 52,
      "featuredImage": "/images/categories/audio.jpg"
    },
    {
      "name": "Computers",
      "productCount": 87,
      "featuredImage": "/images/categories/computers.jpg"
    },
    {
      "name": "Wearables",
      "productCount": 35,
      "featuredImage": "/images/categories/wearables.jpg"
    }
  ],
  "recommendedSearches": [
    "premium headphones",
    "ultra hd televisions",
    "fitness trackers",
    "professional cameras",
    "ultrabooks"
  ]
};