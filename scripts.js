init = function(){
   setTimeout(function(){
	   allAnimations();
	}, 10);
}

function allAnimations() {

	var loopCount = 0;
	var animCount = 0;
	var animTimer = setInterval(function(){ theTimer() }, 100);
	

	bg = document.getElementById('bg'),
	bg_img = document.getElementById('bg_img'),
	roboTop = document.getElementById('roboTop'),
	armLeft = document.getElementById('armLeft'),
	arm = document.getElementById('arm'),
	logo = document.getElementById('logo'),	
	
	copy1a = document.getElementById('copy1a'),
	copy1b = document.getElementById('copy1b'),
	copy1c = document.getElementById('copy1c'),
	copy1d = document.getElementById('copy1d'),
	copy2a = document.getElementById('copy2a'),
	copy2b = document.getElementById('copy2b'),
	copy2c = document.getElementById('copy2c'),
	cta = document.getElementById('cta'),
	
	bar1 = document.getElementById('bar1'),
	bar2 = document.getElementById('bar2'),
	bar3 = document.getElementById('bar3'),
	bar4 = document.getElementById('bar4'),
	bar5 = document.getElementById('bar5'),
	bar6 = document.getElementById('bar6'),
	bar7 = document.getElementById('bar7'),
	
	check1 = document.getElementById('check1'),
	check2 = document.getElementById('check2'),
	check3 = document.getElementById('check3'),
	check4 = document.getElementById('check4'),
	
	R_bar1 = document.getElementById('R_bar1'),
	R_bar2 = document.getElementById('R_bar2'),
	R_bar3 = document.getElementById('R_bar3'),
	R_bar4 = document.getElementById('R_bar4'),
	R_bar5 = document.getElementById('R_bar5'),

	roboHolder = document.getElementById('roboHolder'),
	signHolder = document.getElementById('signHolder'),
	
	signLeft = document.getElementById('signLeft'),
	overlay = document.getElementById('overlay'),
	rightCopy = document.getElementById('rightCopy'),
	leftCopy = document.getElementById('leftCopy'),	
	signRight = document.getElementById('signRight'),
			
	dotRight = document.getElementById('dottedRight'),
	dotLeft = document.getElementById('dottedLeft');
		
		
	//  timings

	function theTimer(){
		if(animCount == 0){
			bg.setAttribute('class', 'transition-10 fade-out');	
			bg_img.setAttribute('class', 'transition-1 move_bg_img');					
		}  else if(animCount == 1){		
			roboHolder.setAttribute('class', 'transition-2 move_robo');		
		}  else if(animCount == 15){
			armLeft.setAttribute('class', 'robo_bounce');	
			signHolder.setAttribute('class', 'robo_bounce');
			bg.setAttribute('class', 'move_up');			
			signRight.setAttribute('class', 'transition-3 scaleNormal_move_Right fade-in');
			dotRight.setAttribute('class', 'transition-3 moveDotRight');
		}  else if(animCount == 16){
			line.setAttribute('class', 'transition-7 line_to_middle');
			R_bar1.setAttribute('class', 'transition-11 bar_scale_half');
		}  else if(animCount == 17){
			R_bar2.setAttribute('class', 'transition-11 bar_scale_half');
		}  else if(animCount == 20){
			R_bar2.setAttribute('class', 'transition-5 bar_scale_2 bar_scale_full');
			R_bar3.setAttribute('class', 'transition-5 bar_scale_half');
			line.setAttribute('class', 'line_to_middle  transition-14 line_to_right');
			signLeft.setAttribute('class', 'transition-3 scaleNormal_move_Left fade-in');
			dotLeft.setAttribute('class', 'transition-3 moveDotLeft');	
			R_bar4.setAttribute('class', 'transition-13 bar_scale_half');		
		}  else if(animCount == 22){
			R_bar5.setAttribute('class', 'transition-13 bar_scale_full');
		}  else if(animCount == 25){	
			line.setAttribute('class', 'line_to_middle  transition-14');										
		}  else if(animCount == 28){
			bar1.setAttribute('class', 'transition-4 bar1_anim');			
		}  else if(animCount == 29){
			R_bar3.setAttribute('class', 'bar_scale_half transition-10');
			R_bar5.setAttribute('class', 'transition-10');	
		}  else if(animCount == 31){
			R_bar4.setAttribute('class', 'transition-10');
			bar2.setAttribute('class', 'transition-4 bar2_anim');
			check1.setAttribute('class', 'transition-10 tick_show');
		}  else if(animCount == 33){
			bar3.setAttribute('class', 'transition-4 bar3_anim');
		}  else if(animCount == 34){
			R_bar3.setAttribute('class', 'bar_scale transition-10');
			R_bar5.setAttribute('class', 'bar_scale transition-13');
		}  else if(animCount == 36){
			R_bar4.setAttribute('class', 'bar_scale_half transition-10');
			bar4.setAttribute('class', 'transition-4 bar4_anim');
			check2.setAttribute('class', 'transition-10 tick_show');
		}  else if(animCount == 39){
			bar5.setAttribute('class', 'transition-4 bar5_anim');
			check3.setAttribute('class', 'transition-10 tick_show');
		}  else if(animCount == 42){
			bar6.setAttribute('class', 'transition-4 bar6_anim');
			check4.setAttribute('class', 'transition-10 tick_show');
		}  else if(animCount == 44){
			R_bar3.setAttribute('class', 'bar_scale transition-10');
			R_bar5.setAttribute('class', 'bar_scale_full transition-10');
		}  else if(animCount == 46){
			bar7.setAttribute('class', 'transition-4 bar7_anim');
		}  else if(animCount == 47){
			R_bar4.setAttribute('class', 'bar_scale_half transition-10');
		}  else if(animCount == 50){
			R_bar3.setAttribute('class', 'bar_scale transition-10');
			R_bar5.setAttribute('class', 'bar_scale transition-13');
		}  else if(animCount == 51){
			R_bar4.setAttribute('class', 'bar_scale transition-10');	
		}  else if(animCount == 52){
			signRight.setAttribute('class', 'transition-3');
			dotRight.setAttribute('class', 'transition-3');
		}  else if(animCount == 57){
			signLeft.setAttribute('class', 'transition-3');			
			dotLeft.setAttribute('class', 'transition-3');
		}  else if(animCount == 59){
			logo.setAttribute('class', 'transition-9 fade-in');
		}  else if(animCount == 62){
			overlay.setAttribute('class', 'transition-11 fade-half');
		}  else if(animCount == 65){
			copy1a.setAttribute('class', 'transition-7 fade-in');
		}  else if(animCount == 68){
			copy1b.setAttribute('class', 'transition-7 fade-in');
		}  else if(animCount == 90){
			copy1a.setAttribute('class', 'transition-8');
			copy1b.setAttribute('class', 'transition-8');			
			bg.setAttribute('class', 'transition-15 move_down');
		}  else if(animCount == 106){
			copy2a.setAttribute('class', 'transition-7 fade-in');
		}  else if(animCount == 109){
			copy2b.setAttribute('class', 'transition-7 fade-in');
		}  else if(animCount == 112){
			copy2c.setAttribute('class', 'transition-7 fade-in');
		}  else if(animCount == 127){
			cta.setAttribute('class', 'transition-7 fade-in cta_pos');
		}  else if(animCount == 150){
			if(loopCount < 1){
				copy2a.setAttribute('class', 'transition-3');
				copy2b.setAttribute('class', 'transition-3');
				copy2c.setAttribute('class', 'transition-3');
				cta.setAttribute('class', '');	
				logo.setAttribute('class', 'transition-3');								
			}
		}  else if(animCount == 153){
			if(loopCount < 1){
				bg.setAttribute('class', '');
				bg_img.setAttribute('class', '');
				armLeft.setAttribute('class', '');
				signHolder.setAttribute('class', '');		
			}
		}  else if(animCount == 160){
			if(loopCount < 1){				
				animCount = -1;
				loopCount++;
				resetAnimation();
			} else{
				clearInterval(animTimer);
			}
		}
		console.log(animCount)
		animCount++
	};
	
	function resetAnimation(){
		line.setAttribute('class', '');	
		bar1.setAttribute('class','');
		bar2.setAttribute('class','');
		bar3.setAttribute('class','');
		bar4.setAttribute('class','');
		bar5.setAttribute('class','');
		bar6.setAttribute('class','');
		bar7.setAttribute('class','');
		check1.setAttribute('class','');
		check2.setAttribute('class','');
		check3.setAttribute('class','');
		check4.setAttribute('class','');
		R_bar1.setAttribute('class','');
		R_bar2.setAttribute('class','');
		R_bar3.setAttribute('class','');
		R_bar4.setAttribute('class','');
		R_bar5.setAttribute('class','');
		overlay.setAttribute('class', '');
		signLeft.setAttribute('class', '');
		signRight.setAttribute('class', '');
		dotRight.setAttribute('class', '');
		dotLeft.setAttribute('class', '');	
		cta.setAttribute('class', '');
	}
}