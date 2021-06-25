# Shortly - URL Shortener

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### Links

- Live Site URL: [Shortly - URL Shortener](https://shortly-xi-five.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Tailwind CSS](https://styled-components.com/) - For styles

### What I learned

- Improve my ability to work with SVG and background images

```css
#form {
  background: #3a3054 url("../assets/images/BgShortenMobile.svg") no-repeat
    right top;
}
```

- Making useful code and maintaining it stylish

```html
<a href="#form" @click="removeHash">Get Started</a>
```

```js
removeHash() {
  setTimeout(() => {
    history.replaceState("", document.title, window.location.pathname)
  }, 1);
},
```

### Continued development

Something I wish to continue to focus in future projects is responsive design best practices and accessibility features.

### Useful resources

- [RegExr](https://regexr.com) - This is an amazing tool to build and test Regular Expressions, which helped me on the input validation for URLs.
- [Font Awesome](https://fontawesome.com) - Really simple and useful icon library.
