export default function (targets, callback, options = {}) {
	if ('IntersectionObserver' in window) {
		// default settings that can be overridden in the options argument
		const defaultOptions = { threshold: 0.5 }
		const userOptions = Object.assign(defaultOptions, options)
		// find the target element in the DOM
		const targetList = Array.from(document.querySelectorAll(targets))

		if (targetList.length > 0) {
			const targetObserver = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					entry.isIntersecting && callback(entry)
					if (userOptions.resetCallback) {
						!entry.isIntersecting && userOptions.resetCallback(entry)
					}
				})
			}, userOptions)

			targetList.forEach(target => targetObserver.observe(target))
		}
	}
}
