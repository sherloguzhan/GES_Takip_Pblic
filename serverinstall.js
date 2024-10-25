const fs = require('fs');
const path = require('path');

const createDir = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
};

const structure = {
  'client': {
    'public': {},
    'src': {
      'components': {},
      'pages': {},
      'services': {},
    },
  },
  'server': {
    'config': {},
    'controllers': {},
    'models': {},
    'routes': {},
    'services': {},
    'utils': {},
  },
  'database': {},
  'tests': {},
};

const createStructure = (baseDir, struct) => {
  Object.entries(struct).forEach(([dir, subDirs]) => {
    const currentDir = path.join(baseDir, dir);
    createDir(currentDir);
    if (Object.keys(subDirs).length > 0) {
      createStructure(currentDir, subDirs);
    }
  });
};

createStructure('.', structure);

// Create main files
fs.writeFileSync('./server/server.js', '// Main server file');
fs.writeFileSync('./client/src/App.js', '// Main React App file');
fs.writeFileSync('./package.json', '{"name": "ges-takip","version": "1.0.0"}');

console.log('Project structure created successfully!');