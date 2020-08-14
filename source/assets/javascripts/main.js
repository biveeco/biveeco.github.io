import flyout from './modules/flyout.js'
import objectFitImages from 'object-fit-images'
import SmoothScroll from 'smooth-scroll'
// import FeaturePoster from '/modules/feature-poster.js'

document.addEventListener('DOMContentLoaded', () => {
	// run polyfill for object-fit on older browsers
	objectFitImages('img[data-ui-aspect-image]')
	// set up flyout toggle buttons
	flyout('data-js-toggle')

	featurePosterBG('li[data-bg]', '[data-bg-target]')
})

// -> need to declare this variable per SmoothScroll's API
// -> https://github.com/cferdinandi/smooth-scroll
// eslint-disable-next-line no-unused-vars
let scroll = new SmoothScroll('[data-js-scroll], a[href*="#"]', {
	speed: 600,
	easing: 'easeInOutCubic'
})

function featurePosterBG (targets, bgElement) {
	if ('IntersectionObserver' in window) {
		const targetList = Array.from(document.querySelectorAll(targets))
		const bg = document.querySelector(bgElement)

		const projectObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					bg.style['background'] = entry.target.dataset.bg
				}
			})
		})

		targetList.forEach(project => projectObserver.observe(project))
	}
}
