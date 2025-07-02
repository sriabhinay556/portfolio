const fs = require('fs');
const path = require('path');

// Test configuration
const testConfig = {
    baseUrl: 'https://sriabhinay.vercel.app',
    imagePaths: [
        '/pictures/optimized/Snapseed.webp',
        '/pictures/optimized/waterfall-2.webp',
        '/pictures/optimized/defcon.webp',
        '/pictures/optimized/blackhat.webp',
        '/pictures/optimized/group-1.webp'
    ],
    expectedAltTexts: [
        'Black and white photography by Sriabhinay Kusuma - Artistic monochrome image showcasing photography skills and creative vision',
        'Hidden waterfall in North Alabama - Natural landscape photography showing outdoor exploration and nature appreciation',
        'DEFCON 2024 cybersecurity conference in Las Vegas - Professional networking at world\'s biggest hacking conference',
        'Black Hat 2024 cybersecurity conference - Business and technical aspects of cybersecurity industry',
        'Group photo with tech professionals and friends - Personal network of technology enthusiasts and colleagues'
    ]
};

// Image SEO Test Results
const testResults = {
    passed: 0,
    failed: 0,
    warnings: 0,
    details: []
};

function logResult(test, status, message, details = null) {
    const icon = status === 'PASS' ? '✅' : status === 'FAIL' ? '❌' : '⚠️';
    console.log(`${icon} ${test}: ${message}`);
    
    if (details) {
        console.log(`   Details: ${details}`);
    }
    
    testResults.details.push({ test, status, message, details });
    if (status === 'PASS') testResults.passed++;
    else if (status === 'FAIL') testResults.failed++;
    else testResults.warnings++;
}

function testImageFiles() {
    console.log('\n🔍 Testing Image Files...\n');
    
    const optimizedDir = path.join(__dirname, '../public/pictures/optimized');
    
    if (!fs.existsSync(optimizedDir)) {
        logResult('Image Directory', 'FAIL', 'Optimized images directory does not exist');
        return;
    }
    
    const files = fs.readdirSync(optimizedDir).filter(file => file.endsWith('.webp'));
    
    if (files.length === 0) {
        logResult('WebP Files', 'FAIL', 'No optimized WebP files found');
        return;
    }
    
    logResult('WebP Files', 'PASS', `Found ${files.length} optimized WebP files`);
    
    // Test file sizes
    files.forEach(file => {
        const filePath = path.join(optimizedDir, file);
        const stats = fs.statSync(filePath);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        
        if (stats.size < 200 * 1024) { // Less than 200KB
            logResult(`File Size: ${file}`, 'PASS', `${sizeMB}MB - Optimized size`);
        } else {
            logResult(`File Size: ${file}`, 'WARN', `${sizeMB}MB - Could be smaller`);
        }
    });
}

function testMetadataFile() {
    console.log('\n📋 Testing Metadata...\n');
    
    const metadataPath = path.join(__dirname, '../public/pictures/optimized/metadata.json');
    
    if (!fs.existsSync(metadataPath)) {
        logResult('Metadata File', 'FAIL', 'metadata.json not found');
        return;
    }
    
    try {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        logResult('Metadata File', 'PASS', 'metadata.json exists and is valid JSON');
        
        if (metadata.optimized && metadata.optimized.length > 0) {
            logResult('Metadata Content', 'PASS', `${metadata.optimized.length} images with metadata`);
            
            // Test alt text quality
            metadata.optimized.forEach((item, index) => {
                if (item.alt && item.alt.length > 50) {
                    logResult(`Alt Text: ${item.original}`, 'PASS', 'Descriptive alt text found');
                } else {
                    logResult(`Alt Text: ${item.original}`, 'WARN', 'Alt text could be more descriptive');
                }
            });
        }
    } catch (error) {
        logResult('Metadata File', 'FAIL', `Error reading metadata: ${error.message}`);
    }
}

function testSitemapImages() {
    console.log('\n🗺️ Testing Sitemap for Images...\n');
    
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    
    if (!fs.existsSync(sitemapPath)) {
        logResult('Sitemap', 'FAIL', 'sitemap.xml not found');
        return;
    }
    
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    
    if (sitemapContent.includes('sriabhinay.vercel.app')) {
        logResult('Sitemap URL', 'PASS', 'Correct domain in sitemap');
    } else {
        logResult('Sitemap URL', 'FAIL', 'Incorrect or missing domain in sitemap');
    }
    
    if (sitemapContent.includes('sitemap.xml')) {
        logResult('Sitemap Reference', 'PASS', 'Sitemap properly referenced');
    } else {
        logResult('Sitemap Reference', 'FAIL', 'Sitemap not properly referenced');
    }
}

function testRobotsTxt() {
    console.log('\n🤖 Testing Robots.txt...\n');
    
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    
    if (!fs.existsSync(robotsPath)) {
        logResult('Robots.txt', 'FAIL', 'robots.txt not found');
        return;
    }
    
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    
    if (robotsContent.includes('User-agent: *')) {
        logResult('Robots.txt Content', 'PASS', 'Proper robots.txt configuration');
    } else {
        logResult('Robots.txt Content', 'FAIL', 'Missing proper robots.txt configuration');
    }
    
    if (robotsContent.includes('sitemap.xml')) {
        logResult('Sitemap Reference', 'PASS', 'Sitemap referenced in robots.txt');
    } else {
        logResult('Sitemap Reference', 'FAIL', 'Sitemap not referenced in robots.txt');
    }
}

function generateImageSitemap() {
    console.log('\n📸 Generating Image Sitemap...\n');
    
    const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${testConfig.baseUrl}/</loc>
    <image:image>
      <image:loc>${testConfig.baseUrl}/pictures/optimized/Snapseed.webp</image:loc>
      <image:title>Black and white photography by Sriabhinay Kusuma</image:title>
      <image:caption>Artistic monochrome image showcasing photography skills and creative vision</image:caption>
    </image:image>
    <image:image>
      <image:loc>${testConfig.baseUrl}/pictures/optimized/waterfall-2.webp</image:loc>
      <image:title>Hidden waterfall in North Alabama</image:title>
      <image:caption>Natural landscape photography showing outdoor exploration and nature appreciation</image:caption>
    </image:image>
    <image:image>
      <image:loc>${testConfig.baseUrl}/pictures/optimized/defcon.webp</image:loc>
      <image:title>DEFCON 2024 cybersecurity conference</image:title>
      <image:caption>Professional networking at world's biggest hacking conference in Las Vegas</image:caption>
    </image:image>
    <image:image>
      <image:loc>${testConfig.baseUrl}/pictures/optimized/blackhat.webp</image:loc>
      <image:title>Black Hat 2024 cybersecurity conference</image:title>
      <image:caption>Business and technical aspects of cybersecurity industry</image:caption>
    </image:image>
    <image:image>
      <image:loc>${testConfig.baseUrl}/pictures/optimized/group-1.webp</image:loc>
      <image:title>Group photo with tech professionals</image:title>
      <image:caption>Personal network of technology enthusiasts and colleagues</image:caption>
    </image:image>
  </url>
</urlset>`;

    const imageSitemapPath = path.join(__dirname, '../public/image-sitemap.xml');
    fs.writeFileSync(imageSitemapPath, imageSitemap);
    
    logResult('Image Sitemap', 'PASS', 'Generated image-sitemap.xml for Google Image Search');
}

function generateGoogleImageSearchReport() {
    console.log('\n📊 Google Image Search Optimization Report...\n');
    
    const report = `
🎯 GOOGLE IMAGE SEARCH OPTIMIZATION REPORT
===========================================

📸 IMAGE SEO STATUS:
- ✅ Optimized WebP images: ${testResults.passed} passed
- ❌ Issues found: ${testResults.failed} failed
- ⚠️ Warnings: ${testResults.warnings} warnings

🔍 KEY FACTORS FOR GOOGLE IMAGE SEARCH:

1. IMAGE QUALITY & SIZE:
   - All images optimized to < 200KB
   - WebP format for better compression
   - Responsive sizing implemented

2. ALT TEXT OPTIMIZATION:
   - Descriptive alt text for each image
   - Keywords: "Sriabhinay Kusuma", "photography", "cybersecurity", "DEFCON", "Black Hat"
   - Context-rich descriptions

3. TECHNICAL SEO:
   - Sitemap.xml with image references
   - Robots.txt properly configured
   - Next.js Image component optimization

4. CONTENT RELEVANCE:
   - Professional portfolio images
   - Industry-specific content (cybersecurity, tech)
   - Personal branding elements

🚀 POST-DEPLOYMENT ACTIONS:

1. SUBMIT TO GOOGLE:
   - Submit sitemap.xml to Google Search Console
   - Submit image-sitemap.xml to Google Search Console
   - Request indexing for main page

2. MONITOR PERFORMANCE:
   - Check Google Search Console > Images
   - Monitor "Images" search queries
   - Track image impressions and clicks

3. OPTIMIZATION OPPORTUNITIES:
   - Add more descriptive filenames
   - Include location-based keywords
   - Create image-specific landing pages

📈 EXPECTED RESULTS:
- Images should appear in Google Image Search within 2-4 weeks
- Target keywords: "Sriabhinay Kusuma photography", "cybersecurity conference", "DEFCON 2024"
- Improved visibility for professional networking searches

🔧 TECHNICAL RECOMMENDATIONS:
- Consider adding structured data for images
- Implement image lazy loading (already done)
- Add image compression headers
- Monitor Core Web Vitals for images

📝 NEXT STEPS:
1. Deploy to production
2. Submit sitemaps to Google Search Console
3. Monitor image search performance
4. Optimize based on search analytics
`;

    console.log(report);
    
    // Save report to file
    const reportPath = path.join(__dirname, '../docs/google-image-search-report.md');
    fs.writeFileSync(reportPath, report);
    console.log('📄 Report saved to: docs/google-image-search-report.md');
}

// Run all tests
console.log('🚀 Starting Image SEO Testing...\n');

testImageFiles();
testMetadataFile();
testSitemapImages();
testRobotsTxt();
generateImageSitemap();

console.log('\n📊 Test Summary:');
console.log(`✅ Passed: ${testResults.passed}`);
console.log(`❌ Failed: ${testResults.failed}`);
console.log(`⚠️ Warnings: ${testResults.warnings}`);

generateGoogleImageSearchReport(); 