import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TarotCard from '../components/TarotCard';
import '../styles/Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cards, spread, question } = location.state || {};

  if (!cards || !spread) {
    return (
      <div className="result">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="result-error">
          <p>결과를 불러올 수 없습니다.</p>
          <motion.button 
            className="action-button"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.03 }}
          >
            처음으로
          </motion.button>
        </div>
      </div>
    );
  }

  const getSpreadKey = () => {
    if (spread.id === 'one-card') return 'oneCard';
    if (spread.id === 'three-card') return 'threeCard';
    return 'celticCross';
  };

  const getCardType = (card) => {
    if (card.type === 'major') return '메이저 아르카나';
    const suits = { wands: '완드', cups: '컵', swords: '소드', pentacles: '펜타클' };
    return suits[card.suit] || '';
  };

  return (
    <div className="result">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <main className="result-main">
        <motion.header 
          className="result-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>✨ 리딩 결과 ✨</h1>
          <p className="spread-name">{spread.name}</p>
        </motion.header>

        {question && (
          <motion.div 
            className="question-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="question-label">당신의 질문</span>
            <p>"{question}"</p>
          </motion.div>
        )}

        {/* 카드 미리보기 */}
        <motion.div 
          className="cards-preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {cards.map((card) => (
            <div key={card.id} className="preview-item">
              <TarotCard card={card} isRevealed={true} size="small" />
            </div>
          ))}
        </motion.div>

        {/* 카드별 해석 */}
        <div className="interpretations">
          {cards.map((card, index) => (
            <motion.article 
              key={card.id}
              className="card-interpretation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <header className="interp-header">
                <span className="position-badge">{card.position.name}</span>
                <span className="type-badge">{getCardType(card)}</span>
              </header>

              <h2 className="card-title">
                {card.name.ko}
                <span className="card-title-en">{card.name.en}</span>
                {card.isReversed && <span className="reversed-tag">역방향</span>}
              </h2>

              <div className="interp-content">
                <div className="interp-image">
                  <TarotCard card={card} isRevealed={true} size="normal" />
                </div>

                <div className="interp-text">
                  <div className="interp-section">
                    <h3>📍 위치 의미</h3>
                    <p>{card.position.description}</p>
                  </div>

                  <div className="interp-section">
                    <h3>🔑 키워드</h3>
                    <div className="keywords">
                      {(card.isReversed ? card.keywords.reversed : card.keywords.upright).map((kw, i) => (
                        <span key={i} className="keyword">{kw}</span>
                      ))}
                    </div>
                  </div>

                  <div className="interp-section">
                    <h3>📖 해석</h3>
                    <p>{card.isReversed ? card.meaning.reversed : card.meaning.upright}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 푸터 */}
        <motion.footer 
          className="result-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="disclaimer">
            🔮 타로 리딩은 현재의 에너지와 가능성을 반영합니다.<br />
            미래는 당신의 선택에 따라 변할 수 있습니다.
          </p>

          <div className="action-buttons">
            <motion.button 
              className="action-button secondary"
              onClick={() => navigate(`/reading/${getSpreadKey()}`)}
              whileHover={{ scale: 1.03 }}
            >
              다시 뽑기
            </motion.button>
            <motion.button 
              className="action-button"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.03 }}
            >
              처음으로
            </motion.button>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default Result;
