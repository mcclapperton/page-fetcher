
const fs = require("fs");
const request = require("request");
// const { request } = require("http");

const aURL = process.argv[2];
const localPathToFile = process.argv[3];

request(aURL, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(`${localPathToFile}`, body, (error) => {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(
        `Downloaded and saved ${response.headers.length} bytes to ${localPathToFile}`
      );
    }
    // file written successfully
  });
  // make http request
  //wait for resp
  //when req complete take data received and write into local file sys
  //  one character = 1 byte

  // console.log("statusCode:", response && response.statusCode);
  // console.log("body:", body);
});
