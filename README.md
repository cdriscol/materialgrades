# Chris Driscol - Material Grades
Playing around with [Angular Material](https://material.angularjs.org) and [Angular Style Guide](https://github.com/johnpapa/angular-styleguide).

## So what's it do?
This is a simple student grade application.  

Features include:
* Enter students by name and grade 1-?? (*there is now max*)
* Calculates minimum, average, and maximum grades
* Inline editing of grades
* Removal of student
* Highlights failing grades (< 65)
* Mocked data-layer

## How do I run this thing?
Fair question..

### Run it from GitHub Pages
Open [this URL](https://cdriscol.github.io/materialgrades) in your browser.

### Run it locally
Rolling up your sleeves, I can respect that!

#### Prerequisites
You'll need the following installed:
* [npm](https://github.com/npm/npm)
* [bower](http://bower.io/)
* [gulp](http://gulpjs.com/)

If you don't, check out those links quick and get them installed.


#### Install npm dependencies
Mostly dev packages for **gulp**, **karma**, **bower**, etc.
```bash
$ npm install
```

#### Install bower dependencies
This is where all things **angular** come from.
```bash
$ bower install
```

#### Compile assets
This will jshint, run tests, compile sass, and create the files we reference in **index.html**.
```bash
$ gulp build
```

Now you should be able to open **index.html** in a browser of your choice..