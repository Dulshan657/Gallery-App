import React, { useState, ChangeEvent, FormEvent } from "react";
import { Album, Photo } from "../types/album";

interface Props {
  nextId: number;
  onCreate: (album: Album) => void;
  onCancel: () => void;
}

/**
 * Form to create a new album.
 * Validation rules:
 *   • Album name ≥ 3 characters (shows alert + inline error)
 *   • At least one file selected
 *   • Every file must be JPEG
 */
export const CreateAlbumForm: React.FC<Props> = ({
  nextId,
  onCreate,
  onCancel,
}) => {
  const [name, setName] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // 1. Name length
    if (name.trim().length < 3) {
      const msg = "Album name must be at least 3 characters";
      setError(msg);
      alert(msg);
      return;
    }

    // 2. At least one file
    if (!files || files.length === 0) {
      setError("Please select at least one .jpg image");
      return;
    }

    // 3. All JPEGs
    const invalid = Array.from(files).find((f) => f.type !== "image/jpeg");
    if (invalid) {
      setError(
        "Only .jpg images are allowed. Remove non‑JPEG files and try again."
      );
      return;
    }

    // Build Photo[] using object URLs so they render immediately
    const photos: Photo[] = Array.from(files).map((file, idx) => ({
      id: idx + 1,
      url: URL.createObjectURL(file),
      title: file.name,
    }));

    onCreate({ id: nextId, name, photos });
  };

  return (
    <form className="album-form" onSubmit={handleSubmit}>
      <h2>Create New Album</h2>
      {error && <p className="form-error">{error}</p>}

      <label>
        Album Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Photos (.jpg only):
        <input type="file" accept="image/jpeg" multiple onChange={handleFile} />
      </label>

      <div className="form-actions">
        <button type="submit" className="primary-btn">
          Save Album
        </button>
        <button type="button" className="secondary-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
