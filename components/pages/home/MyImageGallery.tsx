import React from "react";
import ImageGallery from "react-image-gallery";
import { motion } from "motion/react";

const albumImages = [
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220752/1R4A0831_nzd7qx.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220748/1R4A0834_i1dt8q.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220748/0C7A9573_qcqkdj.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220748/1R4A1037_vlw3bv.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220747/0C7A9609_bke6a6.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220745/0C7A9808_kiz7gb.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220743/1R4A0554_qcdx7l.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220742/1R4A0382_uhsffj.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220742/1R4A0840_uuham4.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220738/1R4A0618_y5tctn.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220738/1R4A0697_htzb7a.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220737/1R4A0315_zgcdfm.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220736/1R4A0534_hzqe8e.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220736/1R4A1143_hcxw2w.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220736/1R4A0510_wbwolq.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220734/1R4A0990_y2xnbv.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220732/1R4A0208_vuywvq.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220732/1R4A1310_hyk4xu.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220731/0C7A9349_nrkdae.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220731/1R4A1190_jdzsgm.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220731/1R4A1124_jrtc8k.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220730/1R4A0950_anrp0y.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220730/0C7A9357_yd6ywk.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220729/1R4A0139_wswta2.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220729/0C7A9620_sl2dny.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220727/1R4A9896_fvvzss.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220725/1R4A1589_gniglr.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220724/1R4A1617_m0um25.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220724/1R4A9832_a9l8g0.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220724/1R4A9910_qvq5fj.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220722/1R4A9819_uudcab.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220722/1R4A1507_bgjhqc.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220721/1R4A1477_o7lucs.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220721/1R4A1651_kpx8hr.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220721/1R4A1301_zod2yu.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220721/1R4A1328_gutpap.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220720/1R4A1163_agf3ey.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220719/0C7A9403_dnpnbw.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220719/1R4A9854_nx879l.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768220718/1R4A1691_cis95x.jpg",
];

const getThumbnailUrl = (url: string) => {
  if (!url.includes("cloudinary.com")) return url;
  return url.replace("/upload/", "/upload/c_thumb,w_250,g_auto,q_auto,f_auto/");
};

const images = albumImages.map((img) => ({
  original: img,
  thumbnail: getThumbnailUrl(img),
}));

export default function MyImageGallery() {
  return (
    <div>
      <motion.div className="text-center text-4xl font-pinyon-script mb-6">
        Our Memories
      </motion.div>
      <ImageGallery
        showPlayButton={false}
        lazyLoad={true}
        autoPlay={true}
        showFullscreenButton={false}
        slideInterval={5000}
        items={images}
        preventDefaultTouchmoveEvent={false}
      />
    </div>
  );
}
