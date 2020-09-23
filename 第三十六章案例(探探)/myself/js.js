window.onload=function(){
	const data=[
		{
			img:"./img/1.jpg",
			text:"My most property doesn't belong to me anymore."
		},
		{
			img:"./img/2.jpg",
			text:"My most property doesn't belong to me anymore."
		},
		{
			img:"./img/3.jpg",
			text:"My most property doesn't belong to me anymore."
		},
		{
			img:"./img/4.jpg",
			text:"My most property doesn't belong to me anymore."
		},
		{
			img:"./img/5.jpg",
			text:"My most property doesn't belong to me anymore."
		},
		{
			img:"./img/6.jpg",
			text:"My most property doesn't belong to me anymore."
		}
	];
	let showarr=data.slice(0,3);
	let savearr=data.slice(3);
	const maxweight=window.innerWidth/2;
	//console.log(showarr,savearr);
	let fra=document.createDocumentFragment();
	render(showarr);
	function render(datalist){
		datalist.forEach((item,index)=>{
		//	console.log(item,index);
		let sec=document.createElement("section");
		sec.classList.add("card","transition");
		sec.innerHTML=`
		<img src="${item.img}" class="card-img-top" alt="...">
		<div class="card-body">
		  <p class="card-text">${item.text}</p>
		</div>`;
		fra.append(sec);
		
		
		let position={x:0,y:0};
		let moveX=0,moveY=0;
		
		sec.addEventListener('touchstart',e=>{
			e.stopPropagation();
			e.preventDefault();
			sec.classList.toggle("transition");
			//console.log(e);
			position={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};
			console.log(position);
		})
		
		sec.addEventListener('touchmove',e=>{
			e.stopPropagation();
			e.preventDefault();
			moveX +=e.changedTouches[0].clientX-position.x;
			moveY +=e.changedTouches[0].clientY-position.y;
			position={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};
			sec.style.transform=`translate(${moveX}px,${moveY}px)`;
			//console.log(moveX,moveY);
		})
		
		sec.addEventListener('touchend',e=>{
			e.stopPropagation();
			e.preventDefault();
		sec.classList.toggle("transition");
			if(Math.abs(moveX)>maxweight){
				sec.remove();
				
				let removesec=showarr.shift();
				showarr.push(savearr[0]);
				savearr.shift();
				savearr.push(removesec);
				renderthird(showarr[2]);
				console.log(showarr,savearr);
			}else{	
				moveX=0;
				moveY=0;
				sec.style.transform=`translate(0px,0px)`;
			}
			
		})
		
		});
		document.body.append(fra);
	}
	function renderthird(data){
		//	console.log(item,index);
		let sec=document.createElement("section");
		sec.classList.add("card","transition");
		sec.innerHTML=`
		<img src="${data.img}" class="card-img-top" alt="...">
		<div class="card-body">
		  <p class="card-text">${data.text}</p>
		</div>`;
		
		
		let position={x:0,y:0};
		let moveX=0,moveY=0;
		
		sec.addEventListener('touchstart',e=>{
			e.stopPropagation();
			e.preventDefault();
			sec.classList.toggle("transition");
			//console.log(e);
			position={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};
			console.log(position);
		})
		
		sec.addEventListener('touchmove',e=>{
			e.stopPropagation();
			e.preventDefault();
			moveX +=e.changedTouches[0].clientX-position.x;
			moveY +=e.changedTouches[0].clientY-position.y;
			position={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};
			sec.style.transform=`translate(${moveX}px,${moveY}px)`;
			//console.log(moveX,moveY);
		})
		
		sec.addEventListener('touchend',e=>{
			e.stopPropagation();
			e.preventDefault();
		sec.classList.toggle("transition");
			if(Math.abs(moveX)>maxweight){
				sec.remove();
				
				let removesec=showarr.shift();
				showarr.push(savearr[0]);
				savearr.shift();
				savearr.push(removesec);
				renderthird(showarr[2]);
				console.log(showarr,savearr);
			}else{	
				moveX=0;
				moveY=0;
				sec.style.transform=`translate(0px,0px)`;
			}
			
		})
		document.body.append(sec);
	}
	
}
