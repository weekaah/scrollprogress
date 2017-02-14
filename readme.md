# Scroll Progress Javascript
Simple JavaScript plugin that indicates scroll progress.

## Demo
[See it in action - Demo](https://weekaah.github.io/scrollprogress)

## Installation
Include `scrollprogress.min.js` inside `<body>` tag.
```html
<!-- javascript -->
<script src="scrollprogress.min.js"></script>
```


## Usage
Initialize the plugin by running `scrollprogress();`.

First argument is the selector and is mandatory, while the second argument (options) can be omitted and will fall
back on defaults.

```html
<script>
  scrollprogress('body');
</script>
```

## Options
Pass a "options" object as a second argument to override the plugin defaults.

```js
scrollprogress('body', {
  // Options
});
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| height | string | "4px" | Defines the height of the horizontal progress bar on top of the screen. |
| backgroundColor | string | "#6deabb" | Progress bar background color. |
| glow| bool | true | Adds a glow around the progress bar using css property "box-shadow". |
| glowLevel | string | "4px | Define the size of the glow |
| transparency | bool | false | Enable/disable progress bar transparency |
| transparencyLevel | number | 0.75 | Define transparency level ( from 0 to 1 ). |
