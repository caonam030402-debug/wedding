import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = './wd_thuthach/public/images';
const MAX_WIDTH = 2000;
const QUALITY = 85;

async function optimizeImages() {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const ext = path.extname(file).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      try {
        const stats = fs.statSync(filePath);
        const fileSizeMB = stats.size / (1024 * 1024);
        
        console.log(`Processing: ${file} (${fileSizeMB.toFixed(2)} MB)`);
        
        const image = sharp(filePath);
        const metadata = await image.metadata();
        
        let transform = image;
        if (metadata.width > MAX_WIDTH) {
          transform = transform.resize(MAX_WIDTH);
        }
        
        const buffer = await transform
          .jpeg({ quality: QUALITY, mozjpeg: true, force: ext !== '.png' })
          .png({ quality: QUALITY, palette: true, force: ext === '.png' })
          .toBuffer();
          
        fs.writeFileSync(filePath, buffer);
        
        const newStats = fs.statSync(filePath);
        const newSizeMB = newStats.size / (1024 * 1024);
        console.log(`✅ Optimized ${file}: ${fileSizeMB.toFixed(2)}MB -> ${newSizeMB.toFixed(2)}MB`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }
  }
}

optimizeImages();
