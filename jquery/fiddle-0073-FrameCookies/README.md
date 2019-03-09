fiddle-0073-FrameCookies
======

### Title

fiddle-0073-FrameCookies


### Creation Date

02-19-19


### Location

Chicago, IL


### Issue

[Issue 291](https://github.com/bradyhouse/house/issues/291)

### Description

Okay, imagine you have web page that is loaded into an iframe. And imagine, that the web page offers a deeplink feature that manages state via query string parameters. User makes changes, and then they can create a deeplink to the page that restores their changes using the values passed via the querystring -- standard stuff. However, the parent page, containing the child iframe, always resets the iframe to the original URL effectively breaking the deeplink functionality. In other words, there are no query string parameters. `Riddle me a fiddle!`

My idea:  Pass the parameters via cookie instead of querystring.  Its a little complicated, but essentially here is the cock tail napkin workflow: 

![image](https://user-images.githubusercontent.com/2453457/53063756-e4c8b200-348a-11e9-9524-f88e0d4bb41c.png)


As crudely depicted (above), there are 2 pages --

* index.html
* frame.html

The workflow is recursive--ie the story is told from the perspective of the `index.html` page. Its begins when `index.html` page is loaded outside a frame.  On ready, the page test whether it has
query string parameters. If `no`, it does nothing.  If `yes`, it writes a cookie for the `/frame.html` page, and
redirects the browser to the `frame.html` page, triggering its load event a second time.  This time because there is no query string, it reads (or `digests`) the query string parameters 
from the parent frame cookie. After processing the data, it deletes the cookie from memory.  Using this approach
query string parameters (aka deep links) can be generated and processed by the `index.html` page even though it is loaded in
a child frame without any `window.location.search` criteria.


### Published Version Link

N/A 


### Tags

jquery, cookies, iframe, window.location.search
