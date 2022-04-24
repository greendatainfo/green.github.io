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
<?php
function crawl_page($url, $depth = 5)
{
  static $seen = array();
  if (isset($seen[$url]) || $depth === 0) {
    return;
  }

  $seen[$url] = true;

  $dom = new DOMDocument('1.0');
  @$dom->loadHTMLFile($url);

  $anchors = $dom->getElementsByTagName('a');
  foreach ($anchors as $element) {
    $href = $element->getAttribute('href');
    if (0 !== strpos($href, 'http')) {
       /* this is where I changed hobodave's code */
        $host = "http://".parse_url($url,PHP_URL_HOST);
        $href = $host. '/' . ltrim($href, '/');
    }
    crawl_page($href, $depth - 1);
  }

  echo "New Page:<br /> ";
  echo "URL:",$url,PHP_EOL,"<br />","CONTENT:",PHP_EOL,$dom->saveHTML(),PHP_EOL,PHP_EOL,"  <br /><br />";
}

crawl_page("http://foxnews.com/", 5);
?>
  </div>
</body>
  <footer>
    Developed by Matthew Jordan.  Inspiration from Court.
  </footer>
</html>
