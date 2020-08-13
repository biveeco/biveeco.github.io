import flyout from './modules/flyout.js'
import objectFitImages from 'object-fit-images'
import SmoothScroll from 'smooth-scroll'

document.addEventListener('DOMContentLoaded', () => {
	// run polyfill for object-fit on older browsers
	objectFitImages('img[data-ui-aspect-image]')
	// set up flyout toggle buttons
	flyout('data-js-toggle')
})

// -> need to declare this variable per SmoothScroll's API
// -> https://github.com/cferdinandi/smooth-scroll
// eslint-disable-next-line no-unused-vars
let scroll = new SmoothScroll('[data-js-scroll], a[href*="#"]', {
	speed: 600,
	easing: 'easeInOutCubic'
})
