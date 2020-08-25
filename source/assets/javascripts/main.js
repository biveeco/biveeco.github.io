import flyout from './modules/flyout.js'
import objectFitImages from 'object-fit-images'
import SmoothScroll from 'smooth-scroll'
import ChangeOnIntersect from './modules/change-on-intersect.js'
import Rellax from 'rellax'

document.addEventListener('DOMContentLoaded', () => {
	// run polyfill for object-fit on older browsers
	objectFitImages('img[data-ui-aspect-image]')

	// set up flyout toggle buttons
	flyout('data-js-toggle')

	// change bg color of featured projects on scroll
	const featureBG = document.querySelector('[data-js-feature-bg-target]')
	ChangeOnIntersect('li[data-js-feature-bg]', (entry) => {
		featureBG.style['background'] = entry.target.dataset.jsFeatureBg
	})

	// fade in certain elements when they are scrolled inside the window
	const fadeInTargets = document.querySelectorAll('[data-js-scroll-reveal-target]')
	ChangeOnIntersect("[data-js-scroll-reveal='show']", (entry) => {
		const targetList = Array.from(fadeInTargets)

		if (targetList.length > 0) {
			targetList.forEach((target) => {
				target.classList.remove('hide-opacity')
			})
		}
	})
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
