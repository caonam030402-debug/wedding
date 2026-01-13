import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import { motion, useInView } from "motion/react";

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
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219664/cld-sample-2.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219666/cld-sample-4.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219662/samples/logo.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219666/main-sample.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219664/cld-sample.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219666/cld-sample-5.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219665/cld-sample-3.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219663/samples/waves.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219663/samples/radial_02.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219662/samples/radial.avif",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219663/samples/paper.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219662/samples/zoom.avif",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219661/samples/upscale-face-1.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219662/samples/canvas.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219660/samples/woman-on-a-football-field.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219660/samples/dessert-on-a-plate.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219660/samples/cup-on-a-table.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219660/samples/coffee.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219660/samples/chair.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219659/samples/chair-and-coffee-table.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219658/samples/man-on-a-street.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219659/samples/man-portrait.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219658/samples/man-on-a-escalator.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219657/samples/outdoor-woman.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219657/samples/look-up.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219656/samples/breakfast.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219656/samples/smile.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219655/samples/balloons.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219653/samples/shoe.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219653/samples/two-ladies.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219650/samples/animals/kitten-playing.gif",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219651/samples/landscapes/landscape-panorama.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219650/samples/cloudinary-group.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219650/samples/landscapes/nature-mountains.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219650/samples/food/spices.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219649/samples/imagecon-group.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219649/samples/ecommerce/accessories-bag.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219649/samples/ecommerce/leather-bag-gray.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219648/samples/ecommerce/car-interior-design.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219648/samples/landscapes/beach-boat.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219648/samples/people/bicycle.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219648/samples/landscapes/architecture-signs.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219647/samples/animals/three-dogs.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219647/samples/people/jazz.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219647/samples/people/boy-snow-hoodie.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219647/samples/bike.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219646/samples/ecommerce/shoes.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219646/samples/people/smiling-man.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219646/samples/landscapes/girl-urban-view.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219646/samples/sheep.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219645/samples/food/pot-mussels.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219645/samples/animals/reindeer.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219645/samples/food/fish-vegetables.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219645/samples/people/kitchen-bar.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219643/samples/cloudinary-icon.png",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219643/samples/food/dessert.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219643/samples/cloudinary-logo-vector.svg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219643/samples/animals/cat.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219643/samples/ecommerce/analog-classic.jpg",
  "https://res.cloudinary.com/dcbuhygls/image/upload/v1768219639/sample.jpg",
];

// Chỉ tối ưu thumbnail để tránh lag, ảnh gốc giữ nguyên chất lượng
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
