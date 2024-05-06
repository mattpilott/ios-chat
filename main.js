import './style.css'

const vv = window.visualViewport

function setVVH() {
	const vvh = `${vv.height}px`
	const vvs = vv.height < 600 ? '0px' : 'env(safe-area-inset-bottom)'

	document.body.style.setProperty('--vvh', vvh)
	document.body.style.setProperty('--vvs', vvs)
}

vv.addEventListener('resize', setVVH)
setVVH()
