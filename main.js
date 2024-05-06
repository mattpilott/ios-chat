import './style.css'
//
;(() => {
	const vv = window.visualViewport

	function setVVH() {
		const vvh = `${vv.height}px`
		const vvs = vv.height < 600 ? '0px' : 'env(safe-area-inset-bottom)'

		document.body.style.setProperty('--vvh', vvh)
		document.body.style.setProperty('--vvs', vvs)
	}

	vv.addEventListener('resize', setVVH)
	setVVH()
})()
// ;(() => {
// 	const vv = window.visualViewport

// 	vv.addEventListener('resize', () => {
// 		document.body.style.setProperty('--vvh', `${vv.height}px`)
// 		document.body.style.setProperty('--safe', vv.height < 600 ? '0px' : 'env(safe-area-inset-bottom)')
// 	})
// 	vv.dispatchEvent(new Event('resize'))
// })()

// ;(() => {
// 	const $el = document.querySelector('.js-kbpin')
// 	const vv = window.visualViewport

// 	vv.addEventListener('resize', () => {
// 		const offset = vv.height < 600 ? '0px' : 'env(safe-area-inset-bottom)'

// 		$el.style.top = `calc(${vv.height}px - ${offset})`
// 	})
// 	vv.dispatchEvent(new Event('resize'))
// })()
