import { useEffect } from "react";
import "../css/TrailerModal.css";

function TrailerModal({ trailerKey, onClose, movieTitle }) {
    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        // Cleanup function to restore scroll
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!trailerKey) {
        return (
            <div className="modal-backdrop" onClick={handleBackdropClick}>
                <div className="modal-content">
                    <button className="modal-close" onClick={onClose}>×</button>
                    <p className="no-trailer">No trailer available for this movie</p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 className="modal-title">{movieTitle} - Trailer</h2>
                <div className="video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                        title={`${movieTitle} Trailer`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default TrailerModal;
