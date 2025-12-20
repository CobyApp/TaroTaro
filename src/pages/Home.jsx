import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { spreads } from '../data/tarotCards';
import '../styles/Home.css';

const Home = () => {
  const spreadList = [
    { key: 'oneCard', icon: '🎴', ...spreads.oneCard },
    { key: 'threeCard', icon: '🃏', ...spreads.threeCard },
    { key: 'celticCross', icon: '✝️', ...spreads.celticCross, featured: true },
  ];

  return (
    <div className="home">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <main className="home-main">
        <motion.header 
          className="home-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            🔮
          </motion.div>
          
          <h1 className="title">TARO</h1>
          <p className="subtitle">당신의 내면을 비추는 거울</p>
        </motion.header>
        
        <motion.section 
          className="spread-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="section-title">스프레드 선택</h2>
          
          <div className="spread-grid">
            {spreadList.map((spread, index) => (
              <Link 
                key={spread.key}
                to={`/reading/${spread.key}`} 
                className={`spread-card ${spread.featured ? 'featured' : ''}`}
              >
                <motion.div 
                  className="spread-card-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="spread-icon">{spread.icon}</span>
                  <h3 className="spread-name">{spread.name}</h3>
                  <span className="spread-count">{spread.cardCount}장</span>
                  <p className="spread-desc">{spread.description}</p>
                  {spread.featured && (
                    <span className="featured-badge">심층 분석</span>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>
      </main>
      
      <footer className="home-footer">
        <p>✨ 타로는 미래를 예언하지 않습니다. 현재의 에너지를 반영합니다. ✨</p>
      </footer>
    </div>
  );
};

export default Home;
