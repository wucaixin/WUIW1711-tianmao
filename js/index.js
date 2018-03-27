//banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<l;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<l;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	};
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);	
	};
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})
}
//侧导航
{
	let labels=document.querySelectorAll(".li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//出现顶部
{
	let topBar=document.querySelector("#topBar");
	let leftBar=document.querySelector("#leftBar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>600){
			topBar.style.display="block";
		}else{
			topBar.style.display="none";
		}

		if(st>800){
			leftBar.style.display="block";
		}else{
			leftBar.style.display="none";
		}
	}
}
//返回顶部
{
	let totop=document.querySelector(".totop");
	let rtotop=document.querySelector(".rtotop");
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
	rtotop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
}
//楼层跳转
{
	let tips=document.querySelectorAll(".tips");
	let content=document.querySelectorAll(".content");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=content[index].offsetTop-40;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25);
		}
	})

	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		for(let i=0;i<content.length;i++){
			if(st>content[i].offsetTop-50){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");	
				}
				tips[i].classList.add("active");
			}
		}
	})
}
//超市
{
	function content(parent){
		const types=parent.querySelectorAll(".chaoshi_jinri");
		const goods=parent.querySelectorAll(".goodlist");
		types.forEach(function(ele,index){
			ele.onmouseover=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		})
	}
	const contentlist=document.querySelectorAll(".content");
	contentlist.forEach(function(ele){
		content(ele);
	})
}