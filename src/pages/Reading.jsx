import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { spreads, fullDeck } from '../data/tarotCards';
import TarotCard from '../components/TarotCard';
import '../styles/Reading.css';

const Reading = () => {
  const { spreadType } = useParams();
  const navigate = useNavigate();
  const spread = spreads[spreadType];
  
  const [phase, setPhase] = useState('question');
  const [question, setQuestion] = useState('');
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (!spread) navigate('/');
  }, [spread, navigate]);

  const startShuffle = () => {
    setPhase('shuffling');
    setTimeout(() => {
      const shuffled = [...fullDeck].sort(() => Math.random() - 0.5);
      setShuffledDeck(shuffled);
      setPhase('selecting');
    }, 2000);
  };

  const selectCard = (card, index) => {
    if (selectedCards.length >= spread.cardCount) return;
    if (selectedCards.find(c => c.id === card.id)) return;

    const drawnCard = {
      ...card,
      isReversed: Math.random() < 0.5,
      position: spread.positions[selectedCards.length]
    };
    
    const newSelected = [...selectedCards, drawnCard];
    setSelectedCards(newSelected);
    setShuffledDeck(prev => prev.filter((_, i) => i !== index));

    if (newSelected.length === spread.cardCount) {
      setTimeout(() => setPhase('revealing'), 600);
    }
  };

  const revealNext = () => {
    if (revealedCount < selectedCards.length) {
      setRevealedCount(prev => prev + 1);
    }
  };

  const goToResult = () => {
    navigate('/result', { 
      state: { cards: selectedCards, spread, question } 
    });
  };

  if (!spread) return null;

  return (
    <div className="reading">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <motion.button 
        className="back-button"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05 }}
      >
        ← 처음으로
      </motion.button>

      <main className="reading-main">
        <motion.h1 
          className="reading-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {spread.name}
        </motion.h1>

        <AnimatePresence mode="wait">
          {/* 질문 입력 */}
          {phase === 'question' && (
            <motion.section 
              className="phase-section"
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="phase-desc">
                마음속의 질문이나 고민을 떠올려보세요
              </p>
              
              <textarea
                className="question-input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="질문을 입력하세요 (선택사항)"
                rows={3}
              />
              
              <motion.button 
                className="action-button"
                onClick={startShuffle}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                카드 섞기 🔮
              </motion.button>
            </motion.section>
          )}

          {/* 셔플 애니메이션 */}
          {phase === 'shuffling' && (
            <motion.section 
              className="phase-section shuffle-section"
              key="shuffling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="shuffle-deck">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="shuffle-card"
                    style={{ zIndex: 6 - i }}
                    animate={{
                      x: [0, -80, 80, -40, 40, 0],
                      rotateZ: [0, -10, 10, -5, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: 1,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
              <p className="shuffle-text">카드를 섞는 중...</p>
            </motion.section>
          )}

          {/* 카드 선택 */}
          {phase === 'selecting' && (
            <motion.section 
              className="phase-section selecting-section"
              key="selecting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* 진행 상황 */}
              <div className="progress-area">
                <p className="phase-desc">
                  <strong>{spread.cardCount}장</strong>의 카드를 선택하세요
                </p>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      animate={{ width: `${(selectedCards.length / spread.cardCount) * 100}%` }}
                    />
                  </div>
                  <span className="progress-text">{selectedCards.length}/{spread.cardCount}</span>
                </div>
              </div>

              {/* 선택된 카드 미리보기 */}
              <div className="selected-preview">
                {spread.positions.map((pos, i) => (
                  <motion.div 
                    key={i}
                    className={`preview-slot ${selectedCards[i] ? 'filled' : ''}`}
                    initial={selectedCards[i] ? { scale: 0 } : {}}
                    animate={selectedCards[i] ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {selectedCards[i] ? (
                      <img 
                        src={selectedCards[i].image} 
                        alt=""
                        className={selectedCards[i].isReversed ? 'reversed' : ''}
                      />
                    ) : (
                      <span className="slot-number">{i + 1}</span>
                    )}
                    <span className="slot-label">{pos.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* 카드 덱 */}
              <div className="deck-area">
                <div className="card-deck">
                  {shuffledDeck.slice(0, 12).map((card, index) => (
                    <motion.button
                      key={card.id}
                      className="deck-card"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ y: -15, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => selectCard(card, index)}
                    >
                      <span className="deck-card-symbol">✦</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* 카드 공개 */}
          {phase === 'revealing' && (
            <motion.section 
              className="phase-section revealing-section"
              key="revealing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="phase-desc">카드를 클릭하여 공개하세요</p>
              
              {spreadType === 'celticCross' ? (
                <CelticCrossLayout 
                  cards={selectedCards}
                  revealedCount={revealedCount}
                  onReveal={revealNext}
                />
              ) : (
                <div className="standard-reveal">
                  {selectedCards.map((card, index) => (
                    <div key={card.id} className="reveal-slot">
                      <span className="reveal-label">{card.position.name}</span>
                      <TarotCard
                        card={card}
                        isRevealed={index < revealedCount}
                        onClick={() => index === revealedCount && revealNext()}
                        size={spreadType === 'oneCard' ? 'large' : 'normal'}
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {revealedCount === selectedCards.length && (
                <motion.button 
                  className="action-button"
                  onClick={goToResult}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                >
                  해석 보기 ✨
                </motion.button>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

// 켈틱크로스 레이아웃 컴포넌트
const CelticCrossLayout = ({ cards, revealedCount, onReveal }) => {
  const renderCard = (index) => (
    <TarotCard
      card={cards[index]}
      isRevealed={index < revealedCount}
      onClick={() => index === revealedCount && onReveal()}
      size="small"
    />
  );

  return (
    <div className="celtic-layout">
      <div className="celtic-cross">
        {/* 상단 */}
        <div className="celtic-pos celtic-top">
          <span className="celtic-label">의식적 목표</span>
          {renderCard(2)}
        </div>
        
        {/* 중앙 행 */}
        <div className="celtic-row">
          <div className="celtic-pos">
            <span className="celtic-label">과거</span>
            {renderCard(4)}
          </div>
          
          <div className="celtic-center">
            <div className="celtic-main-card">
              <span className="celtic-label">현재</span>
              {renderCard(0)}
            </div>
            <div className="celtic-cross-card">
              <span className="celtic-label">도전</span>
              <div className="rotated">{renderCard(1)}</div>
            </div>
          </div>
          
          <div className="celtic-pos">
            <span className="celtic-label">미래</span>
            {renderCard(5)}
          </div>
        </div>
        
        {/* 하단 */}
        <div className="celtic-pos celtic-bottom">
          <span className="celtic-label">무의식</span>
          {renderCard(3)}
        </div>
      </div>
      
      {/* 스태프 */}
      <div className="celtic-staff">
        {[
          { idx: 9, label: '결과' },
          { idx: 8, label: '희망/두려움' },
          { idx: 7, label: '환경' },
          { idx: 6, label: '태도' },
        ].map(({ idx, label }) => (
          <div key={idx} className="staff-pos">
            {renderCard(idx)}
            <span className="staff-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
