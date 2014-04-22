# RESPONSIFY ALL THE THINGS!

## Make Your Site Everything-Friendly

* Mobile-friendly
* Desktop-friendly
* Future-friendly

## "Responsify"

* Everybody tweet out about responsifying your website

## Obligatory "About Me"

* Only mention Twitter

# Introduction

## Why Does It Exist?

* Reaction to "mobile" vs. "desktop" sites
    * Multiple code bases make it hard to maintain
    * "Server attention span" problem
    * How do you know which to serve to whom?
* Lines are blurred by multitude of devices
* Increasingly, all around the world, a "mobile" device is
  a person's **primary** means of accessing the Internet

## Responsive Design Is…

* Fluid layouts
* Flexible images and media
* CSS3 Media Queries

# Basic Techniques

## Set Your Viewport

* <meta name="viewport" content="width=device-width, initial-scale=1">
* Don't set maximum-scale, minimum-scale, and user-scalable

## Create Your Fluid Grid

* target / context = result

## CSS Media Queries

# Advanced Techniques

## Images

### <picture> Element

* <picture> element works much like <video> and <audio> elements
* Uses built-in media queries to determine proper image for the viewport
* Includes an <img> fallback for older browsers
* Not supported in any browser yet
* Picturefill is a JavaScript tool that mimics the <picture> element

### srcset Attribute

* srcset is a new attribute for the <img> element
* Contains multiple images with targeted media queries
* Syntax is unintuitive
* Implemented in WebKit nightly builds

### Responsive JPEGs

* Progressive
* High compression, 2.2x Size

### Warning for Images in WordPress

* WordPress likes to use "width" and "height" attributes
* To override these, use "width" and "max-width" CSS properties
* **Always** set `height: auto;` or your images will be distorted

### Icon Fonts

* Don't use images if you don't have to
* Icon fonts offer alternatives that are scalable, colorable, work with shadows
* Genericons: built by Automattic & used in Twenty Thirteen

## Layout

### box-sizing: border-box;

```
*, *:after, *:before {
    box-sizing: border-box;
}
```

### Flexbox

* Support is increasing


## CSS Preprocessors

* Almost an essential tool for responsive design
* Variables, functions, mixins
* Media query bubbling

## Miscellany

### Viewport Relative Units

* vw, vh, vmin, vmax

### Root-ems




# Resources

## Books

* *Responsive Web Design*, Ethan Marcotte
* *Mobile First*, Luke Wroblewski
* *Implementing Responsive Design*, Tim Kadlec

## Web

* *This Is Responsive*, Brad Frost
* @RWD

## My Book
