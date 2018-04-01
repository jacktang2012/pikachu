 !function(){
	 function writeCode(prefix, code, fn){
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		setInterval(()=>{
			n+=1
			container.innerHTML = code.substring(0,n)
			sytleTag.innerHTML = code.substring(0,n)
			if(n >= code.length) {
				window.clearInterval(id)
				fn && fn.call()
			}
		},100)
	}
	let code = '.lowerlip {width:200px;height:3000px;}' 
writeCode('',code)
 }.call() 