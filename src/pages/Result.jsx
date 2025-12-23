// ============================================
// Result Page
// 타로 리딩 결과 페이지 (AI 해석 포함)
// ============================================

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TarotCard from '../components/TarotCard';
import { generateTarotReading } from '../services/groqService';
import '../styles/Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cards, spread, question } = location.state || {};
  
  const [aiReading, setAiReading] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 페이지 로드 시 자동으로 AI 해석 시작
  useEffect(() => {
    if (cards && spread) {
      fetchAiReading();
    }
  }, [cards, spread]);

  // AI 해석 생성
  const fetchAiReading = async () => {
    setIsLoading(true);
    setError('');

    try {
      const reading = await generateTarotReading(cards, spread, question);
      setAiReading(reading);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

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

  // 마크다운 간단 파싱 (볼드, 헤더 등)
  const parseMarkdown = (text) => {
    if (!text) return '';
    
    return text
      .split('\n')
      .map((line, index) => {
        // 헤더 처리
        if (line.startsWith('### ')) {
          return <h4 key={index} className="ai-h4">{line.replace('### ', '')}</h4>;
        }
        if (line.startsWith('## ')) {
          return <h3 key={index} className="ai-h3">{line.replace('## ', '')}</h3>;
        }
        if (line.startsWith('# ')) {
          return <h2 key={index} className="ai-h2">{line.replace('# ', '')}</h2>;
        }
        
        // 볼드 처리
        const boldRegex = /\*\*(.*?)\*\*/g;
        const parts = [];
        let lastIndex = 0;
        let match;
        
        while ((match = boldRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            parts.push(line.slice(lastIndex, match.index));
          }
          parts.push(<strong key={`bold-${index}-${match.index}`}>{match[1]}</strong>);
          lastIndex = match.index + match[0].length;
        }
        
        if (lastIndex < line.length) {
          parts.push(line.slice(lastIndex));
        }
        
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        return <p key={index} className="ai-p">{parts.length > 0 ? parts : line}</p>;
      });
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

        {/* AI 해석 섹션 */}
        <motion.section 
          className="ai-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="ai-header">
            <h2>🤖 AI 타로 해석</h2>
          </div>

          {isLoading && (
            <div className="ai-loading">
              <div className="loading-spinner"></div>
              <p>AI가 카드를 해석하고 있습니다...</p>
              <p className="loading-sub">잠시만 기다려주세요 ✨</p>
            </div>
          )}

          {error && (
            <div className="ai-error">
              <p>❌ {error}</p>
              <motion.button
                className="retry-button"
                onClick={fetchAiReading}
                whileHover={{ scale: 1.02 }}
              >
                다시 시도
              </motion.button>
            </div>
          )}

          {aiReading && !isLoading && (
            <motion.div 
              className="ai-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {parseMarkdown(aiReading)}
            </motion.div>
          )}
        </motion.section>

        {/* 카드별 기본 해석 */}
        <motion.section
          className="basic-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="section-title">📜 카드별 기본 해석</h2>
          
          <div className="interpretations">
            {cards.map((card, index) => (
              <motion.article 
                key={card.id}
                className="card-interpretation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
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
        </motion.section>

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
