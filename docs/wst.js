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
from requests_html import HTMLSession
s = HTMLSession()
r = s.get('https://metro.co.uk/news/tech/')
posts = r.html.find('ul.metro-mosaic', first=True).find('h3')
for post in posts:
print(post.text)
  </div>
</body>
  <footer>
    Developed by Matthew Jordan.  Inspiration from Court.
  </footer>
</html>
