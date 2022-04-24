<!DOCTYPE html>
<html lang="en">
  <link type="text/css" rel="stylesheet" href="style.css" />
<head>
<title>Green Data Info</title>
</head>
<body>
<div>
  <h1 class="welcome">Green Data Info</h1>
  <button onclick="document.location='About.html'">About</button>
  <button onclick="document.location='EPA.html'">EPA</button>
  <button onclick="document.location='OECD.html'">OECD</button>
  <button onclick="document.location='Greenpeace.html'">Greenpeace</button>
  <button onclick="document.location='WWFFN.html'">WWFFN</button>
  <button onclick="document.location='Sierraclub.html'">Sierra Club</button>
  <button onclick="document.location='wst.js'">wst</button>
  <p>Welcome to GreenDataInfo!  We're dedicated to providing the public with environmental conservation information from the public sectior in an easy-to-read format.</p>
  <div>
import * as fetch from "node-fetch";
import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";
import * as urlParser from "url";

const seenUrls = {};

const getUrl = (link, host, protocol) => {
  if (link.includes("http")) {
    return link;
  } else if (link.startsWith("/")) {
    return `${protocol}//${host}${link}`;
  } else {
    return `${protocol}//${host}/${link}`;
  }
};

const crawl = async ({ url, ignore }) => {
  if (seenUrls[url]) return;
  console.log("crawling", url);
  seenUrls[url] = true;

  const { host, protocol } = urlParser.parse(url);

  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const links = $("a")
    .map((i, link) => link.attribs.href)
    .get();

  const imageUrls = $("img")
    .map((i, link) => link.attribs.src)
    .get();

  imageUrls.forEach((imageUrl) => {
    fetch(getUrl(imageUrl, host, protocol)).then((response) => {
      const filename = path.basename(imageUrl);
      const dest = fs.createWriteStream(`images/${filename}`);
      response.body.pipe(dest);
    });
  });

  links
    .filter((link) => link.includes(host) && !link.includes(ignore))
    .forEach((link) => {
      crawl({
        url: getUrl(link, host, protocol),
        ignore,
      });
    });
};

crawl({
  url: "http://stevescooking.blogspot.com/",
  ignore: "/search",
});
  </div>
</body>
  <footer>
    Developed by Matthew Jordan.  Inspiration from Court.
  </footer>
</html>
