const dirTree = require("directory-tree");
const fs = require("fs");

// Build list of markdown files
const textTree = dirTree("./src/text", { extensions: /\.md/ });
// Loop through each file and build JSON object of text
(buildTextObj => {
  const allArr = textTree.children;
  const newArr = {};
  if (Array.isArray(allArr)) {
    allArr.forEach(element => {
      // Create an object for each file
      let mdName = element.name.replace(/(\/|\.|md)/g, "");
      let mdPath = `./${element.path}`;
      let text = fs.readFileSync(mdPath, { encoding: "utf-8" });
      newArr[mdName] = text;
    });
  }
  fs.writeFileSync("./src/text/all.json", JSON.stringify(newArr), "utf8");
  console.log("✓ Create text object in ./src/text/all.json");
})();
