# Electron-Category-Products
Electron Categories and Products

- jspm install. 
- npm install.
- npm install electron-prebuilt -g.
- change this line 
- module.exports = factory(require('jquery'));
- to this
- window.toastr = factory(window.jQuery);
  
- electron index.js
