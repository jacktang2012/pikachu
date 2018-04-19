!function(){
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(()=>{
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
	  container.scrollTop = container.scrollHeight
      if(n >= code.length){
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 10)
  }
  let code = `
/*
首先需要准备皮卡丘的皮
*/  
.preview {
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
/*
接着画皮卡丘的鼻子
*/
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
/*
继续画皮卡丘的眼睛哈
*/
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
/*
这个是左眼睛
*/
.eyes.left {
	right:50%;
	margin-right:90px;
}
/*
然后是右眼睛
*/
.eyes.right {
	left:50%;
	margin-left:90px;
}
/*
然后准备小脸蛋
*/
.faces {
	position:absolute;
	width:68px;
	height:68px;
	border-radius:50%;
	background:red;
	border:2px solid #000000;
	top:85px;
}
/*
小脸蛋的左边
*/
.faces.left {
	right:50%;
	margin-right:116px;
}
/*
小脸蛋的右边
*/
.faces.right {
	left:50%;
	margin-left:116px;
}
/*
准备上嘴唇
*/
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
/*
继续准备下嘴唇
*/
.lowerlip-wrapper {
	bottom:1px;
	position: absolute;  
	left:50%; 
	margin-left:-150px;
	overflow: hidden;
	height:100px;
	width:300px;
 }
/*
然后是舌头
*/
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
	left:24%;
	bottom:-25px;
	width:100px;
	height:100px;
	background: #FC4A62;
	position: absolute;
	border-radius:50%;
 }
 /*
皮卡丘画完了
*/`
  writeCode('',code)
}.call()