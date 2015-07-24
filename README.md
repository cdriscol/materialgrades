# Chris Driscol - Material Grades
Playing around with [Angular Material](https://material.angularjs.org) and [Angular Style Guide](https://github.com/johnpapa/angular-styleguide).

## So what's it do?
This is a simple student grade application.  

Features include:
* Enter students by name and grade 1-?? (*there is no max*)
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
* [http-server](https://www.npmjs.com/package/http-server)

If you don't, check out those links quick and get them installed.


#### Install npm dependencies
Mostly dev packages for **gulp**, **karma**, **bower**, **http-server**, etc.
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

#### Start http server
This will start a http server to server the angular app.  This is required because serving from the file system directly will cause CORS issues when loading angular templates.

```bash
$ http-server .
```

Now you should be able to open http://localhost:8080 in a browser of your choice..