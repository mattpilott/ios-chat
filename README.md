# iOS Chat

This is a working example of handling the iOS keyboard in a chat style application where you want the message bar to remain visible when the keyboard is shown.

<img src="./github/screen.png" width="393" />

## How it works

As iOS doesn't do much to help layout reflow when the keyboard is shown, we need to do this ourselves.

Using the visualViewport API we can detect when the keyboard is shown and adjust the layout accordingly.

This example takes the height of the visual viewport and sets a CSS variable `--vvh` conatining the height of the visualViewport. This can then be used in CSS to adjust the layout.

For notched devices we add a second CSS variable `--vvs` which is set to `env(safe-area-inset-bottom)` or `0px` based on the height of the visualViewport.

Whilst everything in the iife function in the `main.js` file is needed, the `style.css` file contains a mix of styles needed for the demo and the styles critical to the technique. These have been marked with a comment.

```js
const vv = window.visualViewport

function setVVH() {
	const vvh = `${vv.height}px`
	const vvs = vv.height < 600 ? '0px' : 'env(safe-area-inset-bottom)'

	document.body.style.setProperty('--vvh', vvh)
	document.body.style.setProperty('--vvs', vvs)
}

vv.addEventListener('resize', setVVH)
setVVH()
```

#### Found an bug?

Open an issue and I'll take a look.
