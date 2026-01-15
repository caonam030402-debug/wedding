import fs from 'fs';
import path from 'path';

const directory = './wd_thuthach/public/images';

function renameImages() {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const nameWithoutExt = path.basename(file, path.extname(file));
    
    if (['.jpg', '.jpeg', '.png'].includes(ext) && !nameWithoutExt.endsWith('_v2')) {
      const oldPath = path.join(directory, file);
      const newName = `${nameWithoutExt}_v2${ext}`;
      const newPath = path.join(directory, newName);
      
      try {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${file} -> ${newName}`);
      } catch (error) {
        console.error(`Error renaming ${file}:`, error);
      }
    }
  }
}

renameImages();
