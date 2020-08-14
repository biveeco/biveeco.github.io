export default function (targets, bgElement, options = { threshold: 0.5 }) {
	if ('IntersectionObserver' in window) {
		const targetList = Array.from(document.querySelectorAll(targets))
		const bg = document.querySelector(bgElement)

		const projectObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					bg.style['background'] = entry.target.dataset.bg
				}
			})
		}, options)

		targetList.forEach(project => projectObserver.observe(project))
	}
}
