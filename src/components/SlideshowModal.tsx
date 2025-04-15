import React from "react";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Album } from "../types/album";

Modal.setAppElement("#root");

interface Props {
  album: Album | null;
  onClose: () => void;
}

export const SlideshowModal: React.FC<Props> = ({ album, onClose }) => {
  if (!album) return null;

  const items = album.photos.map((p) => ({
    original: p.url,
    thumbnail: p.url,
    description: p.title,
  }));

  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button
        className="close-btn"
        onClick={onClose}
        aria-label="Close slideshow"
      >
        ×
      </button>
      {/* Post‑card size (600 × 400) */}
      <div className="postcard-frame">
        <ImageGallery
          items={items}
          additionalClass="postcard-gallery"
          showPlayButton
          showFullscreenButton={false}
          autoPlay
          infinite
        />
      </div>
    </Modal>
  );
};
