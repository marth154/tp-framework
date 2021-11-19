const express = require("express");
const axios = require("axios");
const bodyparser = require("body-parser");
const crypto = require("crypto");
const fs = require("fs");

const app = express();
app.use(bodyparser.json());
const port = 3000;

// Lancement du service
app.listen(port, () => {
  console.log(`Service listening at http://localhost:${port}`);
  listOfFilter();
});

const filterFolder = "./filters/";

const checkFilter = (files) => {
  // if file empty
  if (files.length === 0) {
    return console.log("🙃 Folder /filters doesn't contain any files");
  }

  files.forEach((file) => {
    fs.readFile(`${filterFolder}${file}`, (err, data) => {
      console.log(file);
      const fileContent = data.toString("utf8");
      if (fileContent === "") {
        return console.log("❌ Empty file");
      } else {
        try {
          const module = require(`${filterFolder}${file}`);
          // console.log(fileContent);
          console.log("✅ Filter ok");
        } catch (e) {
          console.log("❌ Not a function");
        }
      }
    });
  });
};

const listOfFilter = () => {
  if (!fs.existsSync(filterFolder)) {
    console.log("❌ Folder /filters doesn't exist");
    // Verif dossier vide
  } else {
    fs.readdir(filterFolder, (err, files) => {
      if (err) {
        console.log(err);
      }
      checkFilter(files);
    });
  }
};
