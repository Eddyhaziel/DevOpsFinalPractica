const fs = require('fs');
const path = require('path');

test('La página HTML contiene "Hola Mundo"', () => {
    const filePath = path.resolve(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    
    // Busca el contenido específico del texto dentro del HTML
    expect(htmlContent).toContain('<h1>Hola Mundo</h1>');
});
