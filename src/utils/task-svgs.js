// SVG compiling for Hive
const dirTree = require('directory-tree');
const fs = require('fs');
const SVGSpriter = require('svg-sprite');
const pathTool = require('path');
const mkdirp = require('mkdirp');

// 4. Build list of icons and create a sprite from those
const iconTree = dirTree('./src/img/svgs');
// Loop through each icon and begin to build SVG sprite
(buildIcons => {
  const allArr = iconTree.children;
  const newArr = [];
  // Create spriter instance (see https://github.com/jkphl/svg-sprite#general-configuration-options for `config` examples)
  const spriter = new SVGSpriter({
    dest: './src/img',
    mode: {
      symbol: {
        mode: 'symbol',
        sprite: 'icon-sprite',
        inline: true,
        dest: ''
      }
    },
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false
    }
  });
  if (Array.isArray(allArr)) {
    allArr.forEach(element => {
      // Build new clean array
      newArr.push(element.name.replace(/(\/|\.|svg)/g, ''));
      // Add spriter icon
      let svgPath = `./${element.path}`;
      spriter.add(
        pathTool.resolve(svgPath),
        element.name,
        fs.readFileSync(svgPath, { encoding: 'utf-8' })
      );
    });
  }
  // Compile the sprite
  spriter.compile(function(error, result) {
    /* Write `result` files to disk */
    for (var mode in result) {
      for (var resource in result[mode]) {
        mkdirp.sync(pathTool.dirname(result[mode][resource].path));
        fs.writeFileSync(
          result[mode][resource].path,
          result[mode][resource].contents
        );
      }
    }
  });
  console.log('✓ Create icon svg in ./src/config/icons/hive-icons.svg');
  console.log('✓ Create icon data in ./src/config/icons/hive-icons.json');
})();
