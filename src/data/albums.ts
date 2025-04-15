import { Album } from "../types/album";

export const albums: Album[] = [
  {
    id: 1,
    name: "Beaches",
    photos: [
      { id: 1, url: "/images/b1.jpg", title: "B1" },
      { id: 2, url: "/images/b2.jpg", title: "B2" },
      { id: 3, url: "/images/b3.jpg", title: "B3" },
      { id: 4, url: "/images/b2.jpg", title: "B4" },
      { id: 5, url: "/images/b3.jpg", title: "B5" },
    ],
  },
  {
    id: 2,
    name: "Cities",
    photos: [
      { id: 1, url: "/images/c1.jpg", title: "C1" },
      { id: 2, url: "/images/c2.jpg", title: "C2" },
      { id: 3, url: "/images/c3.jpg", title: "C3" },
      { id: 4, url: "/images/c2.jpg", title: "C4" },
      { id: 5, url: "/images/c3.jpg", title: "C5" },
    ],
  }, 
   {
    id: 3,
    name: "Dogs",
    photos: [
      { id: 1, url: "/images/d1.jpg", title: "D1" },
      { id: 2, url: "/images/d2.jpg", title: "D2" },
      { id: 3, url: "/images/d3.jpg", title: "D3" },
      { id: 4, url: "/images/d2.jpg", title: "D4" },
      { id: 5, url: "/images/d3.jpg", title: "D5" },
    ],    
  },
  {
    id: 4,
    name: "Vehicles",
    photos: [
      { id: 1, url: "/images/v1.jpg", title: "V1" },
      { id: 2, url: "/images/v2.jpg", title: "V2" },
      { id: 3, url: "/images/v3.jpg", title: "V3" },
      { id: 4, url: "/images/v4.jpg", title: "V4" },
      { id: 5, url: "/images/v5.jpg", title: "V5" },
    ],    
  },
];