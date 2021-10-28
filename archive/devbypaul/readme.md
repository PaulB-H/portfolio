<h3>Note: Archived. Rebuilt from scratch.</h3>

<a href="https://github.com/PaulB-H/devbypaul_redesign" target="_blank"><h3>New repo</h3></a>

<hr />

#### Portfolio

<p>I wanted a design that would allow natural movement between pages with click & drag, touch swipes, and mouse scroll. I know horizontal portfolios are not common, but I prefer the way they scroll on mobile, especially due to the way the URL bar gets shown/hidden.</p>

<p>On a mobile device / browser, during a swipe up or down, the URL bar can show or hide. This makes developing a layout focused on 100% VH pages difficult to do smoothly, without 'jerky' repositioning of elements after the URL bar has been shown or hidden.</p>

<p>Currently I have the click & drag navigation disabled as it was causing problems on Safari & iOS devices.</p>

<p>I discovered scroll-snap and scroll-snap-stop which were used to make a natural and smooth swipe experience on mobile devices.</p>

<p>I was originally hoping to have some on-scrolling animations, however the libraries like AOS were not developed for use on a horizontal scrolling container</p>

<hr>

[Live Page](https://www.devbypaul.com)
<br>

<hr>

<p>Deployed with NGINX on a Ubuntu VPS</p>
<p>SSL with Certbot</p>
