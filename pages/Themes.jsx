import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Themes.css';

const themesData = [
  {
    id: 1,
    title: 'AI/VR',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Artificial Intelligence & Virtual Reality',
    points: [
      'Machine Learning algorithms for predictive analytics',
      'Immersive VR experiences for education and training',
      'AI-powered chatbots and virtual assistants',
      'Computer Vision applications for real-world problems',
      'Mixed Reality solutions for enterprise applications'
    ]
  },
  {
    id: 2,
    title: 'IoT',
    icon: '📡',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Internet of Things',
    points: [
      'Smart home automation systems',
      'Industrial IoT for manufacturing optimization',
      'Wearable devices for health monitoring',
      'Smart city infrastructure solutions',
      'Environmental monitoring and conservation tech'
    ]
  },
  {
    id: 3,
    title: 'Cybersecurity',
    icon: '🔒',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Security & Privacy',
    points: [
      'Blockchain-based security solutions',
      'Zero-trust architecture implementations',
      'Threat detection using AI/ML',
      'Secure authentication and authorization systems',
      'Privacy-preserving data analytics tools'
    ]
  },
  {
    id: 4,
    title: 'Agriculture',
    icon: '🌾',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'AgriTech Solutions',
    points: [
      'Precision farming using drones and sensors',
      'Crop disease detection with computer vision',
      'Smart irrigation and water management systems',
      'Supply chain optimization for farmers',
      'Climate-resilient farming techniques'
    ]
  },
  {
    id: 5,
    title: 'Healthcare',
    icon: '⚕️',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'HealthTech Innovation',
    points: [
      'Telemedicine and remote patient monitoring',
      'AI-assisted diagnosis and treatment planning',
      'Electronic Health Records (EHR) systems',
      'Mental health support applications',
      'Drug discovery and personalized medicine'
    ]
  },
  {
    id: 6,
    title: 'Miscellaneous',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    description: 'Open Innovation',
    points: [
      'FinTech solutions for financial inclusion',
      'EdTech platforms for accessible learning',
      'Social impact projects for community development',
      'Clean energy and sustainability initiatives',
      'Creative tools for art, music, and design'
    ]
  }
];

function Themes() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const popupVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="themes-page">
      <div className="themes-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hackathon Themes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="themes-subtitle"
        >
          Choose your path to innovation
        </motion.p>
      </div>

      <motion.div 
        className="themes-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {themesData.map((theme) => (
          <motion.div
            key={theme.id}
            className="theme-card"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedTheme(theme)}
          >
            <div 
              className="theme-card-gradient"
              style={{ background: theme.gradient }}
            />
            <div className="theme-card-content">
              <div className="theme-icon">{theme.icon}</div>
              <h3 className="theme-title">{theme.title}</h3>
              <p className="theme-description">{theme.description}</p>
              <div className="theme-arrow">→</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedTheme && (
          <>
            <motion.div 
              className="popup-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedTheme(null)}
            />
            <motion.div
              className="popup-container"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div 
                className="popup-header"
                style={{ background: selectedTheme.gradient }}
              >
                <div className="popup-icon">{selectedTheme.icon}</div>
                <h2>{selectedTheme.title}</h2>
                <p>{selectedTheme.description}</p>
                <button 
                  className="popup-close"
                  onClick={() => setSelectedTheme(null)}
                >
                  ✕
                </button>
              </div>
              <div className="popup-body">
                <h3>Key Focus Areas:</h3>
                <ul className="popup-points">
                  {selectedTheme.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="point-bullet">▹</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Themes;