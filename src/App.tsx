import React, { useState } from "react";
import { AlbumTable } from "./components/AlbumTable";
import { SlideshowModal } from "./components/SlideshowModal";
import { CreateAlbumForm } from "./components/CreateAlbumForm";
import { AddPhotosForm } from "./components/AddPhotosForm";
import { albums as initialAlbums } from "./data/albums";
import { Album, Photo } from "./types/album";
import "./styles.css";

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>(initialAlbums);
  const [selected, setSelected] = useState<Album | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const addAlbum = (album: Album) => {
    setAlbums((prev) => [...prev, album]);
    setShowCreateForm(false);
  };

  const addPhotos = (albumId: number, photos: Photo[]) => {
    setAlbums((prev) =>
      prev.map((a) =>
        a.id === albumId ? { ...a, photos: [...a.photos, ...photos] } : a
      )
    );
    setShowAddForm(false);
  };

  return (
    <div className={selected ? "split-container" : "container"}>
      <div className="left-pane">
        <h1>Album Gallery</h1>
        <AlbumTable albums={albums} onOpen={setSelected} />

        {/* Action buttons */}
        {!showCreateForm && !showAddForm && (
          <>
            <button
              className="primary-btn"
              onClick={() => setShowCreateForm(true)}
            >
              + Create New Album
            </button>
            <button
              className="primary-btn"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => setShowAddForm(true)}
            >
              + Add Photos
            </button>
          </>
        )}

        {showCreateForm && (
          <CreateAlbumForm
            nextId={albums.length + 1}
            onCreate={addAlbum}
            onCancel={() => setShowCreateForm(false)}
          />
        )}

        {showAddForm && (
          <AddPhotosForm
            albums={albums}
            onAdd={addPhotos}
            onCancel={() => setShowAddForm(false)}
          />
        )}
      </div>

      {selected && (
        <div className="right-pane">
          <SlideshowModal album={selected} onClose={() => setSelected(null)} />
        </div>
      )}
    </div>
  );
};

export default App;
