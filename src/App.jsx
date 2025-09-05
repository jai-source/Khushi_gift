import { useState } from 'react';
import './App.css';

const galleryImages = [
  { file: 'IMG-20250808-WA0024.jpg', quote: 'yoo dost!!😁' },
  { file: 'IMG-20250818-WA0098.jpg', quote: 'happy birthdayyyyy👌' },
  { file: 'IMG-20250818-WA0102.jpg', quote: 'keep laughing punjaban💕' },
  { file: 'IMG-20250818-WA0122.jpg', quote: 'enjoyy you dayyyy!!!!🙌😊' },
  { file: 'IMG-20250819-WA0077.jpg', quote: 'Shine on, Khushi!✨' },
  { file: 'IMG-20250819-WA0078.jpg', quote: 'cool girl hain tu toh😎' },
  { file: 'IMG-20250829-WA0061.jpg', quote: 'May your dreams come true.🤞' },
  { file: 'IMG-20250831-WA0001.jpg', quote: 'Stay magical, always.🪄🪄' },
  { file: 'IMG-20250831-WA0002.jpg', quote: '19th level huhh😌' },
  { file: 'IMG-20250831-WA0003.jpg', quote: 'Adventure awaits you!🤩' },
  { file: 'IMG-20250831-WA0004.jpg', quote: 'be Khush Khushi😂' },
  { file: 'IMG-20250831-WA0005.jpg', quote: 'Keep being you, Khushi.😁😁😎' },
  { file: 'IMG-20250831-WA0006.jpg', quote: 'CCR maam on top🔝🔝' },
  { file: 'IMG-20250831-WA0007.jpg', quote: 'stayy kind😊😊🙌🙌' },
  { file: 'IMG-20250831-WA0008.jpg', quote: 'You are a star!⭐⭐' },
  { file: 'IMG-20250831-WA0009.jpg', quote: 'Never stop dreaming.😉😉' },
  { file: 'IMG-20250831-WA0010.jpg', quote: 'to the amazing girl I know.🥂' },
  { file: 'IMG-20250831-WA0012.jpg', quote: 'You are amazing just as you are.' },
  { file: 'IMG-20250831-WA0013.jpg', quote: 'stayy cool alwaysss😉😉' },
  { file: 'IMG-20250831-WA0014.jpg', quote: '# Fab khushi' },
  { file: 'IMG-20250831-WA0015.jpg', quote: 'First meeting awkward but now good friends huh' },
  { file: 'IMG-20250831-WA0016.jpg', quote: 'Inside joke keeper🤪🤪' },
  { file: 'WhatsApp Image 2025-08-31 at 00.53.45_1473e1e0.jpg', quote: 'cannot think of more quotes sorry🥹🥹.' },
  { file: 'WhatsApp Image 2025-08-31 at 00.54.50_41529249.jpg', quote: 'cannot think of more quotes sorry🥹🥹' },
  { file: 'WhatsApp Image 2025-08-31 at 01.02.47_ec25c2c4.jpg', quote: 'cannot think of more quotes sorry🥹🥹' },
];

function Confetti() {
  return (
    <div className="confetti">
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}>
          🎉
        </span>
      ))}
    </div>
  );
}

function Gallery({ onImageClick }) {
  return (
    <div className="gallery">
      {galleryImages.map((img, idx) => (
        <img
          key={img.file}
          src={`/khushi/${img.file}`}
          alt={`Khushi ${idx + 1}`}
          className="gallery-image"
          loading="lazy"
          onClick={() => onImageClick(img)}
          tabIndex={0}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
}

function Lightbox({ image, onClose }) {
  if (!image) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={`/khushi/${image.file}`} alt="Big Khushi" className="lightbox-img" />
        <div className="lightbox-quote">{image.quote}</div>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      </div>
    </div>
  );
}

function FallingBalloons() {
  const balloonEmojis = ["🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈"];
  return (
    <div className="falling-balloons">
      {balloonEmojis.map((b, i) => (
        <span key={i} style={{ left: `${(i * 12) + 5}%`, animationDelay: `${i * 0.7}s` }}>{b}</span>
      ))}
    </div>
  );
}

function BirthdayBox({ onClose }) {
  const [showMsg, setShowMsg] = useState(false);
  // Show message immediately when overlay is opened
  useState(() => { setShowMsg(true); }, []);
  return (
    <div className="box-overlay" onClick={onClose}>
      <div className="box-message box-message-big">
        Happy Birthday, Khushi!<br />
        Wishing you magic, joy, and endless surprises!<br />
        <span style={{ fontSize: '2rem' }}>🥳</span>
      </div>
      <button className="box-close" onClick={onClose}>×</button>
    </div>
  );
}

function App() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showBox, setShowBox] = useState(false);
  return (
    <div className="birthday-container">
      <FallingBalloons />
      <div className="birthday-card">
        <Confetti />
        <h1>
          Happy Birthday, Khushi!{' '}
          <span
            role="img"
            aria-label="gift"
            className="box-emoji"
            style={{ cursor: 'pointer' }}
            onClick={() => setShowBox(true)}
          >
            🎁
          </span>
        </h1>
        <p className="subtitle">wasuuupppppp khushieeeee partyyy hain ab tohhhhh 
          birthdayyy girll 😎😎😎😎😎.</p>
        <div className="balloons">
          <span role="img" aria-label="balloon">🎈</span>
          <span role="img" aria-label="balloon">🎈</span>
          <span role="img" aria-label="balloon">🎈</span>
        </div>
        <div className="message">
          <p>
            dekh insta pe lamba likhna accha nhi lagta.... watsapp pe lamba toh sab karte hain🤷‍♂️🤷‍♂️
            kuch toh alag karne ka mann tha mera.. hehehehe kardiya.. dekh first time esi website banayi..
            toh i know ki perfect nahi hain.. but still.. banane mein mazza aaya....

            the first time i met you ufffff that was awkward as hell😂😂but then dheere dheere baat hui...
            summer break mein and uske baad aur zyada huii and kab tu itni acchi dost ban gyi pata hi nhi challa🤞🤞
            dekh im not the type of guy jo apni problems and all share karta hain but still you get me... that just shows ki you are a good friend..
            frankly im lucky to have you..  i am not expressive or anything but in my own words you mean alot to me khsuhii!!!!
            i'll stop the "emotional" rant now.. you enjoy your day!!!!!
          </p>
        </div>
        <div className="signature">— From Jai(the cool guy...)</div>
        <h2 className="gallery-title">Memories</h2>
        <Gallery onImageClick={setLightboxImg} />
      </div>
      <Lightbox image={lightboxImg} onClose={() => setLightboxImg(null)} />
      {showBox && <BirthdayBox onClose={() => setShowBox(false)} />}
    </div>
  );
}

export default App;


