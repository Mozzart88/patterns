import Singleton from './application/Singleton.js'

function delay (ms: number): Promise<void> {
	return new Promise((resolve) => {
		
		setTimeout(()=>{
			const s2 = Singleton.instance('other')
			console.log(`in delay: ${s2}`)
			s2.val = 'other'
			console.log(`in delay: ${s2}`)
			resolve()
		}, ms)
	})
}

async function runDelay() {
	await delay(100)
}
const singleton = Singleton.instance('some')
console.log(`first version: ${singleton}`)
setTimeout(()=>{
	const s2 = Singleton.instance('other')
	console.log(`in timeout: ${s2}`)
}, 500)
console.log(`after timeout: ${singleton}`)
await runDelay()
console.log(`after delay: ${singleton}`)

