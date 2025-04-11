const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directory containing the images
const imagesDir = path.join(process.cwd(), 'public', 'images');

// Function to process images
async function optimizeImages() {
  try {
    // Read directory
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      const stats = fs.statSync(filePath);
      
      // Skip if it's a directory or not an image
      if (stats.isDirectory() || !file.match(/\.(png|jpg|jpeg|webp)$/i)) {
        continue;
      }
      
      console.log(`Optimizing ${file}...`);
      const extension = path.extname(file).toLowerCase();
      const baseName = path.basename(file, extension);
      const outputPath = path.join(imagesDir, `${baseName}${extension}`);
      
      // Skip if already optimized
      if (file.includes('_optimized')) {
        continue;
      }
      
      try {
        // Process image based on file type
        if (extension === '.png') {
          await sharp(filePath)
            .resize({ width: 1200, withoutEnlargement: true })
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(outputPath.replace(extension, `_optimized${extension}`));
        } else if (extension === '.jpg' || extension === '.jpeg') {
          await sharp(filePath)
            .resize({ width: 1200, withoutEnlargement: true })
            .jpeg({ quality: 80 })
            .toFile(outputPath.replace(extension, `_optimized${extension}`));
        } else if (extension === '.webp') {
          await sharp(filePath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputPath.replace(extension, `_optimized${extension}`));
        }
        
        // Replace original with optimized version (rename files)
        const optimizedPath = outputPath.replace(extension, `_optimized${extension}`);
        const backupPath = outputPath.replace(extension, `_original${extension}`);
        
        // Backup original
        fs.renameSync(filePath, backupPath);
        // Move optimized to original name
        fs.renameSync(optimizedPath, filePath);
        
        console.log(`Optimized ${file} successfully!`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
    
    console.log('Image optimization completed!');
  } catch (err) {
    console.error('Error reading images directory:', err);
  }
}

optimizeImages(); 