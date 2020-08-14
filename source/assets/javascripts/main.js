import flyout from './modules/flyout.js'
import objectFitImages from 'object-fit-images'
import SmoothScroll from 'smooth-scroll'
import FeaturePoster from './modules/feature-poster.js'
import Rellax from 'rellax'

document.addEventListener('DOMContentLoaded', () => {
	// run polyfill for object-fit on older browsers
	objectFitImages('img[data-ui-aspect-image]')
	// set up flyout toggle buttons
	flyout('data-js-toggle')
	// change bg color of featured projects on scroll
	FeaturePoster('li[data-bg]', '[data-bg-target]')
})

// -> need to declare this variable per SmoothScroll's API
// -> https://github.com/cferdinandi/smooth-scroll
// eslint-disable-next-line no-unused-vars
const scroll = new SmoothScroll('[data-js-scroll], a[href*="#"]', {
	speed: 600,
	easing: 'easeInOutCubic'
})

// eslint-disable-next-line no-unused-vars
const rellax = new Rellax('[data-js-rellax]')
