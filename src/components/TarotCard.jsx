import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/TarotCard.css';

const TarotCard = ({ card, isRevealed, onClick, size = 'normal' }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isRevealed && !flipped) {
      setFlipped(true);
    }
  }, [isRevealed, flipped]);

  const handleClick = () => {
    if (!flipped && onClick) {
      setFlipped(true);
      onClick();
    }
  };

  return (
    <motion.div
      className={`tarot-card ${size} ${flipped ? 'flipped' : ''} ${card?.isReversed ? 'reversed' : ''}`}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={!flipped ? { scale: 1.02 } : {}}
      whileTap={!flipped ? { scale: 0.98 } : {}}
    >
      <div className="card-inner">
        {/* 앞면 (카드 이미지) */}
        <div className="card-front">
          <img src={card?.image} alt={card?.name?.ko || ''} />
          {card?.isReversed && <span className="reversed-badge">REVERSED</span>}
        </div>
        
        {/* 뒷면 */}
        <div className="card-back">
          <div className="card-back-design">
            <span>✦</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TarotCard;
