var cnt=0,image_cnt=999;
	const arr=[[1,'first','first-content'],[2,'second','second-content'],[3,'third','third-content']];

	const images=['images/lion.jpg','images/disney.jpg','images/movies.jpg'];

	
	const photo_change =(side="right")=>{
		if(side==='left'){
			image_cnt--;
		}
		else{
			image_cnt++;
		}
		document.getElementById('image-area-content').src=images[image_cnt%3];
		console.log(images[image_cnt%3]);
	}
	setInterval(photo_change,5000);
	const  navigation = () => {
		console.log(cnt);
		if(cnt%2==0){
			document.getElementById("hamburger-menu").style.display="none";
			document.getElementById("drawing-bar").style.display="block";
		}
		else{
			document.getElementById("hamburger-menu").style.display="block";
			document.getElementById("drawing-bar").style.display="none";
		}
		cnt++;
	}
	const open_main_blk=(a)=>{
		console.log("click",a);
		console.log(arr[0][0]);
		for(var i=0;i<3;i++){
			if(arr[i][0]===a){
				document.getElementById(arr[i][1]).style.background="white";
				document.getElementById(arr[i][2]).style.display="block";
			}
			else{
				document.getElementById(arr[i][1]).style.background="grey";
				document.getElementById(arr[i][2]).style.display="none";
			}
		}
	}