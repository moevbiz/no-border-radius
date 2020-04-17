![icon](https://github.com/moevbiz/no-border-radius/blob/master/icon.png?raw=true "Icon")
# no-border-radius
Browser extension to remove border radius on specified websites

![preview](https://github.com/moevbiz/no-border-radius/blob/master/Bildschirmfoto%202020-04-16%20um%2011.10.28.png?raw=true "Preview Image")

## how it works
The extension will override all `border-radius` properties by inserting
```
<style>
* {
  border-radius: 0!important;
}
</style>
```
into the document header of all websites specified in the extension options. 

#### advanced

The extension makes use of the `chrome.storage` API. It matches url strings using `indexOf(loc) > 0`, so the entry `instagram.com` will override styles on `www.instagram.com`, `instagram.com/userprofile` and `anotherwebsite.com/?instagram.com`. This means you could enable the extension on *all websites* by simply adding a dot (`.`) to the list, although this is not recommended. You could also extend the application by forking this repo and changing the `style` variable inside `scripts.js`.

## Installation

while the extension is not published, see the following guides for manually installing extensions:
- Chrome: https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/
- Firefox: https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/

## How to use

The extension will remove border-radius by default on `instagram.com`, `twitter.com` and `facebook.com`.
visit the options page to add to this list or remove entries.

## todo / ideas
- [x] manage websites directly from extension
- [x] style the options page
- [ ] give option to apply styles to all websites
- [x] add icon for the extension
- [ ] add better icon
- [ ] better code
- [ ] give the extension a better name
- [ ] publish extension
