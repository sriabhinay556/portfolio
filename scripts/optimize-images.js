const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/pictures');
const outputDir = path.join(__dirname, '../public/pictures/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
    quality: 85,
    format: 'webp',
    width: 800, // Max width for web
    height: 600  // Max height for web
};

// Original images with their descriptions for better alt text
const imageMetadata = {
    'Snapseed.jpg': {
        alt: 'Black and white photography by Sriabhinay Kusuma - Artistic monochrome image showcasing photography skills',
        title: 'Photography'
    },
    'waterfall-2.jpg': {
        alt: 'Hidden waterfall in North Alabama - Natural landscape photography showing outdoor exploration',
        title: 'Waterfalls'
    },
    'defcon.jpg': {
        alt: 'DEFCON 2024 cybersecurity conference in Las Vegas - Professional networking at world\'s biggest hacking conference',
        title: 'DEFCON 2024'
    },
    'blackhat.jpg': {
        alt: 'Black Hat 2024 cybersecurity conference - Business and technical aspects of cybersecurity industry',
        title: 'Black Hat'
    },
    'group-1.jpg': {
        alt: 'Group photo with tech professionals and friends - Personal network of technology enthusiasts and colleagues',
        title: 'My People'
    }
};

async function optimizeImage(filename) {
    const inputPath = path.join(inputDir, filename);
    const outputPath = path.join(outputDir, filename.replace('.jpg', '.webp'));
    
    try {
        await sharp(inputPath)
            .resize(optimizationSettings.width, optimizationSettings.height, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp({ quality: optimizationSettings.quality })
            .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = fs.statSync(outputPath).size;
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${filename}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${reduction}% reduction)`);
        
        return {
            original: filename,
            optimized: filename.replace('.jpg', '.webp'),
            originalSize,
            optimizedSize,
            reduction: parseFloat(reduction)
        };
    } catch (error) {
        console.error(`❌ Error optimizing ${filename}:`, error.message);
        return null;
    }
}

async function optimizeAllImages() {
    console.log('🔄 Starting image optimization...\n');
    
    const files = fs.readdirSync(inputDir).filter(file => 
        file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
    );
    
    const results = [];
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    for (const file of files) {
        const result = await optimizeImage(file);
        if (result) {
            results.push(result);
            totalOriginalSize += result.originalSize;
            totalOptimizedSize += result.optimizedSize;
        }
    }
    
    const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    
    console.log('\n📊 Optimization Summary:');
    console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB`);
    console.log(`Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(1)}MB`);
    console.log(`Overall reduction: ${totalReduction}%`);
    
    // Generate metadata file for the optimized images
    const metadata = {
        optimized: results.map(r => ({
            original: r.original,
            optimized: r.optimized,
            alt: imageMetadata[r.original]?.alt || '',
            title: imageMetadata[r.original]?.title || ''
        })),
        summary: {
            totalOriginalSize: totalOriginalSize,
            totalOptimizedSize: totalOptimizedSize,
            reduction: parseFloat(totalReduction)
        }
    };
    
    fs.writeFileSync(
        path.join(outputDir, 'metadata.json'),
        JSON.stringify(metadata, null, 2)
    );
    
    console.log('\n📝 Metadata file generated: optimized/metadata.json');
    console.log('🎉 Image optimization complete!');
}

// Run the optimization
optimizeAllImages().catch(console.error); 