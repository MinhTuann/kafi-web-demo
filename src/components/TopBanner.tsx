import React from 'react';
import { motion } from 'framer-motion';

interface TopBannerProps {
  title: string;
  background: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const TopBanner: React.FC<TopBannerProps> = ({
  title,
  background,
  className = '',
  titleClassName = ''
}) => {
  return (
    <div className={`w-full h-[360px] relative overflow-hidden rounded-[48px] ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {typeof background === 'string' ? (
          <img
            src={background}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          background
        )}
      </div>

      {/* Fixed Overlay Image (Logo/Shape Blur) */}
      <div className="absolute h-full left-0 w-[35%] z-20">
        <div className="absolute inset-0">
          <img
            src="/kafi-web-demo/assets/top-banner-overlay.png"
            alt=""
            className="absolute h-full max-w-none w-[300%] object-cover"
          />
        </div>
      </div>

      {/* Title Content */}
      <div
        className={`absolute left-[55px] top-1/2 -translate-y-1/2 z-30 font-['Roboto'] font-bold text-white text-[56px] leading-[1.2] ${titleClassName} w-[40%]`}
      >
        {title.split('/').map((t, i) => (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {(i !== 0 ? '/' : '') + t}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
