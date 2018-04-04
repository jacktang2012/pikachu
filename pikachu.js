!function(){
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(()=>{
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      if(n >= code.length){
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 10)
  }
  let code = `.preview {
	background:#FEE433;
	height:100%;
	display: flex;
	justify-content:center;
	align-items:center;
}
.wrapper {
	width:100%;
	height:165px;
	display: block;
	position:relative;
}
.nose {
	width:0px;
	height:0px;
	top:28px;
	position: absolute;
	margin-left:-12px;
	left:50%;
	border:13px solid black;
	border-radius:50%;
	border-width:12px;
	border-color:black transparent transparent transparent;
}
.eyes {
	position:absolute;
	width:50px;
	height:50px;
	border-radius:50%;
	background:#2E2E2E;
	border:2px solid #000000;	
}
.eyes::after {
	content: '';
	border:2px solid #000000;
	display: block;
	background:white;
	height:24px;
	width:24px;
	border-radius:50%;
	left:7px;
	top:1px;
	position: absolute;
}
.eyes.left {
	right:50%;
	margin-right:90px;
}
.eyes.right {
	left:50%;
	margin-left:90px;
}
.faces {
	position:absolute;
	width:68px;
	height:68px;
	border-radius:50%;
	background:red;
	border:2px solid #000000;
	top:85px;
}
.faces.left {
	right:50%;
	margin-right:116px;
}
.faces.right {
	left:50%;
	margin-left:116px;
}
.upperlip-wrapper {
	width:170px;
	height:60px;
	position: absolute;
	left:calc(50% - 85px);
	top:0;
}
.upperlip {
	width:75px;
	height:25px;
	border:3px solid black;
	border-top:none;
	position: absolute;
	top:52px;
	background: #FEE433;
}
.upperlip.left {
	left:7px;
	border-bottom-left-radius:30px 20px;
	transform:rotate(-18deg);
	border-right:none;
	position: absolute;
}
.upperlip.right {
	left:84px;
	transform:rotate(18deg); 
	border-bottom-right-radius:30px 20px;
	border-left:none;
	position: absolute;
}
.lowerlip-wrapper {
	bottom:1px;
	position: absolute;  
	left:50%; 
	margin-left:-150px;
	overflow: hidden;
	height:100px;
	width:300px;
 }
.lowerlip {
	width:200px;
	height:3000px;
	background: #990513;
	border-radius:150px/1000px;
	border:2px solid black;
	position: absolute;
	bottom:0;
	right:17%;
	overflow: hidden;
} 
.lowerlip::after {
	content:'';
	width:100px;
	height:100px;
	background: #FC4A62;
	position: absolute;
	border-radius:50%;
	left:24%;
	bottom:-25px;
 }`
  writeCode('',code)
}.call()