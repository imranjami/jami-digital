import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';
import styles from './HelloSection.module.scss';
import { useMeasure } from 'react-use';

const HelloSection = () => {
  const [imageRef, { height: imageHeight }] = useMeasure<HTMLDivElement>();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  const transition = {
    type: 'spring',
    duration: 0.3,
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  };

  const delay = 0.7;

  const animation_blue = {
    hidden: { opacity: 0, x: -100, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 5,
      transition: { ...transition },
    },
  };

  const animation_yellow = {
    hidden: { opacity: 0, x: 100, rotate: 10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: -6,
      transition: { ...transition, delay: delay },
    },
  };

  const animation_red = {
    hidden: { opacity: 0, y: 100, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { ...transition, delay: delay * 1.5 },
    },
  };

  return (
    <div className={styles.container} ref={ref}>
      <AnimatePresence initial>
        {inView && (
          <>
            <div className={styles.imageContainer}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animation_blue}
                className={styles.image}
              >
                <Image
                  src={'/hello_sticker_blue.svg'}
                  alt="hello blue"
                  width={500}
                  height={325}
                />
              </motion.div>
            </div>
            <div className={styles.imageContainer}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animation_yellow}
                className={styles.image}
              >
                <Image
                  src={'/hello_sticker_yellow.svg'}
                  alt="hello yellow"
                  width={500}
                  height={325}
                />
              </motion.div>
            </div>
            <div className={styles.imageContainer}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animation_red}
                className={styles.image}
              >
                <Image
                  src={'/hello_sticker_red.svg'}
                  alt="hello red"
                  width={500}
                  height={325}
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export { HelloSection };