<html>
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
  <button onclick="document.location='web.php'">wst</button>
  <p>Welcome to GreenDataInfo!  We're dedicated to providing the public with environmental conservation information from the public sectior in an easy-to-read format.</p>
  <div>
<?php
require 'simple_html_dom.php';

$html = file_get_html('http://www.foxnews.com/');
$title = $html->find('title', 0);
$image = $html->find('img', 0);

echo $title->plaintext."<br>\n";
echo $image->src;
?>
  </div>
</body>
  <footer>
    Developed by Matthew Jordan.  Inspiration from Court.
  </footer>
</html>
