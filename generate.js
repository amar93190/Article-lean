const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked');

// Configure marked for better security and features
marked.setOptions({
    headerIds: true,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: true
});

// Directory configuration
const inputDir = path.join(__dirname, 'notion_exports');
const outputDir = path.join(__dirname, 'output');
const templatePath = path.join(__dirname, 'templates', 'article.html');

// Ensure output directory exists
fs.ensureDirSync(outputDir);

// Read the template
const template = fs.readFileSync(templatePath, 'utf-8');

// Process all markdown files
function processMarkdownFiles() {
    const files = fs.readdirSync(inputDir);
    
    console.log('🔍 Recherche des fichiers Markdown...');
    
    let processedCount = 0;
    
    files.forEach(file => {
        if (path.extname(file).toLowerCase() !== '.md') return;
        
        console.log(`\n📝 Traitement de ${file}...`);
        
        const filePath = path.join(inputDir, file);
        const markdown = fs.readFileSync(filePath, 'utf-8');
        
        // Extract title from first heading or filename
        let title = file.replace('.md', '');
        const titleMatch = markdown.match(/^#\s+(.+)$/m);
        if (titleMatch) {
            title = titleMatch[1];
        }
        
        // Convert markdown to HTML
        const htmlContent = marked(markdown);
        
        // Replace template placeholders
        const output = template
            .replace('{{title}}', title)
            .replace('{{content}}', htmlContent);
        
        // Generate output filename
        const outputFile = file.replace('.md', '.html');
        const outputPath = path.join(outputDir, outputFile);
        
        // Write the file
        fs.writeFileSync(outputPath, output);
        processedCount++;
        
        console.log(`✅ Généré : ${outputFile}`);
    });
    
    console.log(`\n🎉 Terminé ! ${processedCount} fichier(s) généré(s) dans le dossier 'output'.`);
}

// Run the process
try {
    processMarkdownFiles();
} catch (error) {
    console.error('❌ Erreur :', error.message);
    process.exit(1);
} 