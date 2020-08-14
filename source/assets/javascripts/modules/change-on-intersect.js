export default function (targets, callback, options = { threshold: 0.5 }) {
	if ('IntersectionObserver' in window) {
		const targetList = Array.from(document.querySelectorAll(targets))

		const targetObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				entry.isIntersecting && callback(entry)
			})
		}, options)

		targetList.forEach(project => targetObserver.observe(project))
	}
}
