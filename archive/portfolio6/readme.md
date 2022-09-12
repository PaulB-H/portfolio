<h1>Portfolio</h1>

<img src="https://raw.githubusercontent.com/PaulB-H/portfolio/main/animation.gif" />

<h5><small>Made with:</small><br /> HTML, CSS, JS, Canvas</h5>
<h5><small>Served through:</small><br /> Ubuntu VPS, NGINX, PM2, CertBot</h5>

<a href="https://paulbh.com" target="_blank">https://paulbh.com</a>

<h2>Description</h2>
<p>My current portfolio, along with a collection of past versions.</p>

<h2>Details</h2>
<p>To make this animation I...

<p>...created arrays for colors, fonts, and technologies.</p>

<p>...setup an interval that randomly picks one of each, generates a random x/y location (based on the height & width of the canvas) and prints the string.</p>
<p>...used another interval to print a very transparent layer over the entire canvas, to give the fading effect.</p>
<p>...setup a timer to clear both of the previous intervals, "freezing" the canvas with whatever was printed, around the same time my biography and project list fade in from the top.</p>

---

<p>The portfolio is hosted on a Ubuntu VPS that I use to host some other small projects. I use...</p>
<p>...NGINX as a reverse proxy to handle requests to multiple domains with different server blocks.</p>
<p>...PM2 to manage Node.js apps and servers through auto start/restarting.</p>
<p>...Certbot for SSL certificates.</p>

<h2>Libraries / Frameworks / Packages</h2>
<ul>
<li><a href="https://animate.style/" target="_blank">animate.css</a></li>
</ul>
