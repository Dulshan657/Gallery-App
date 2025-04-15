// A single photo inside an album
export interface Photo {
    id: number;      
    url: string;   
    title: string;   
  }
  
  // A photo album 
  export interface Album {
    id: number;   
    name: string;   
    photos: Photo[]; 
  }