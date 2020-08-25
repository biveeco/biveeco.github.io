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
	ChangeOnIntersect('[data-js-feature-bg]', (entry) => {
		if (entry.isIntersecting) {
			featureBG.style['background'] = entry.target.dataset.jsFeatureBg
		}
	})

	// fade in certain elements when they are scrolled inside the window
	ChangeOnIntersect('[data-js-scroll-reveal]', (entry) => {
		const types = entry.target.dataset.jsScrollReveal.split(' ')
		const toggleClass = entry.target.dataset.jsScrollRevealToggleClass || 'hide-opacity'
		const targetName = entry.target.dataset.jsScrollRevealTargets
		const targetList = Array.from(document.querySelectorAll(`[data-js-scroll-reveal-target='${targetName}']`))

		if (targetList.length > 0) {
			targetList.forEach((target) => {
				if (entry.isIntersecting) {
					types.includes('show') && target.classList.remove(toggleClass)
					return
				}
				types.includes('hide') && target.classList.add(toggleClass)
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
