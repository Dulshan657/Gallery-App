import React, { useState, ChangeEvent, FormEvent } from "react";
import { Album, Photo } from "../types/album";

interface Props {
  albums: Album[];
  onAdd: (albumId: number, photos: Photo[]) => void;
  onCancel: () => void;
}

export const AddPhotosForm: React.FC<Props> = ({ albums, onAdd, onCancel }) => {
  const [albumId, setAlbumId] = useState<number>(albums[0]?.id ?? 0);
  const [files, setFiles] = useState<FileList | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => setFiles(e.target.files);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!files || files.length === 0) {
      setError("Please select at least one .jpg image");
      return;
    }

    const invalid = Array.from(files).find((f) => f.type !== "image/jpeg");
    if (invalid) {
      setError("Only .jpg images are allowed. Remove non‑JPEG files and try again.");
      return;
    }

    const photos: Photo[] = Array.from(files).map((file, idx) => ({
      id: Date.now() + idx,
      url: URL.createObjectURL(file),
      title: file.name,
    }));

    onAdd(albumId, photos);
  };

  return (
    <form className="album-form" onSubmit={handleSubmit}>
      <h2>Add Photos to Album</h2>
      {error && <p className="form-error">{error}</p>}

      <label>
        Choose Album:
        <select value={albumId} onChange={(e) => setAlbumId(Number(e.target.value))}>
          {albums.map((a) => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>
      </label>

      <label>
        Photos (.jpg only):
        <input type="file" accept="image/jpeg" multiple onChange={handleFile} />
      </label>

      <div className="form-actions">
        <button type="submit" className="primary-btn">Add Photos</button>
        <button type="button" className="secondary-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};