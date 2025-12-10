import { useState } from "react";
import "./DigitalCard.css";

// Importa il tuo QR code
// IMPORTANTE: Metti il file qr-code.png nella cartella public/
import qrCodeImage from "/jarbatoQrCode.png";
import spades from "/spades.png";
import { color } from "motion";

const DigitalCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle flip della card
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div
        className={`card-wrapper ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card-front">
          <p style={{ color: "white", paddingBottom: "10px" }}>
            Tap To See QR Code
          </p>

          <div className="card-border">
            <img src={spades} alt="heart of spades" />
            <div className="logo">
              <p>JP</p>
            </div>
            <img src={spades} alt="heart of spades" />
          </div>
          <p className="author">Jarbato Piercer</p>
        </div>
        <div className="card-back">
          <div className="card-border">
            <div className="card-border-cut-left"></div>
            <div className="card-border-cut-right"></div>
            <img src={spades} alt="heart of spades" />
            <div className="logo">
              <img src={qrCodeImage} alt="QR Code" />
            </div>
            <img src={spades} alt="heart of spades" />
          </div>
          <p className="author">Jarbato Piercer</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;
