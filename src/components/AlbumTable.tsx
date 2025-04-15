import React from "react";
import { Album } from "../types/album";

interface Props {
  albums: Album[];
  onOpen: (album: Album) => void;
}

/**
 * Thumbnails use the credit‑card ratio (85.6 × 53.98 mm ≈ 1.586 : 1).
 * approximate that with **320 × 202 px**.
 */
export const AlbumTable: React.FC<Props> = ({ albums, onOpen }) => (
  <table className="album-table">
    <thead>
      <tr>
        <th>Album</th>
        <th>Preview</th>
      </tr>
    </thead>
    <tbody>
      {albums.map((album) => (
        <tr key={album.id} onClick={() => onOpen(album)} className="album-row">
          <td>{album.name}</td>
          <td>
            <img
              src={album.photos[0].url}
              alt={album.photos[0].title}
              className="credit-card-img"
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
