import { useAccount } from 'wagmi';
import Header from '../Header/Header';
import styles from './GalleryPage.module.scss';
import { useEvmWalletNFTs } from '@moralisweb3/next';
import { SwatchImagePreview } from '../SwatchImagePreview/SwatchImagePreview';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  // const { address } = useAccount();
  const address = '0x2245831B784B4E1030844206288BC1B23b11DeF7';

  const { data: nfts, isFetching } = useEvmWalletNFTs({
    chain: '0x2105',
    address: address || '',
    tokenAddresses: ['0x13dc8261FCe63499Aa25DEB512bb1827B411b83B'],
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>a gallery of swatches,</h1>
          <p>
            curated by <span>you</span>.
          </p>
        </div>

        <div className={styles.galleryContainer}>
          {nfts?.map((nft: any, index: number) => {
            const imageUrl = nft.metadata?.image || '';
            const name = nft.metadata?.name || '';
            const animationDelay = index * 0.05;
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: animationDelay,
                  },
                }}
                transition={{
                  duration: 0.5,
                }}
                key={nft.tokenId}
                className={styles.swatchContainer}
              >
                <div className={styles.overlay}>{name}</div>
                <SwatchImagePreview key={nft.tokenId} imgUrl={imageUrl} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { GalleryPage };
