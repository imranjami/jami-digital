import styles from './AnimatedPalette.module.scss';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -270
  },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, type: 'spring', bounce: 0.3 }
  }
};

const background = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { delay: 1.7 } }
};

const squareSvg = (width = 25, color = '', key: number) => (
  <motion.svg fill={color} variants={item} key={key} viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' height={`${width}px`} width={`${width}px`}>
    <rect x='0' y='0' width='100' height='100' rx='20' ry='20' />
  </motion.svg>
);

function AnimatedPalette() {
  const squares = [
    { key: 1, color: '#ed1f32' },
    { key: 2, color: '#f47b29' },
    { key: 3, color: '#4783c4' },
    { key: 4, color: '#43b763' },
    { key: 5, color: '#fed401' },
    { key: 5, color: '#ca63a6' }
  ];

  return (
    <div className={styles.container}>
      <motion.div variants={container} initial='hidden' animate='show' exit='hidden' className={styles.palette}>
        {squares.map((square) => squareSvg(20, square.color, square.key))}
        <div className={styles.backgroundContainer}>
          <motion.div className={styles.background} variants={background} initial='hidden' animate='show' exit='hidden' />
        </div>
      </motion.div>
    </div>
  );
}

export default AnimatedPalette;
