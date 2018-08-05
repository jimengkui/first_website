window.onload=function(){
	/*-------------------------------------运动框架--------------------------------------------------------------*/
	function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];};
		 function domove(obj,json,fn) {  
            clearInterval(obj.timer);  
            obj.timer = setInterval(function () {  
                var bStop = true;  
                for(attr in json){  
                  
                    var objAttr = 0;  
                    if(attr == "opacity"){  
                        objAttr = Math.round(parseFloat(getStyle(obj,attr))*100);  
                    }else{  
                        objAttr = parseInt(getStyle(obj,attr));  
                    }  
                   
                    var iSpeed = (json[attr] -objAttr)/7;  
                        iSpeed = iSpeed>0 ?Math.ceil(iSpeed):Math.floor(iSpeed);  
                     
                    if(objAttr != json[attr]){  
                        bStop = false;  
                    }  
                    if(attr == "opacity"){  
                        obj.style.filter = 'alpha(opacity:'+(objAttr+iSpeed)+')';  
                        obj.style.opacity = (objAttr+iSpeed)/100;  
                    }else{  
                        obj.style[attr] =  objAttr+iSpeed+'px';
                    }  
                }  
                if(bStop){
                    clearInterval(obj.timer);  
                    if(fn){  
                        fn();  
                    }  
                }  
            },30);  
        }
	
	/*---------------------------------------抖动框架------------------------------------------------------------*/
	function shake(obj,attr,num1,num2,endFn){
					var a=parseInt(getStyle(obj,attr));
				
					var arr=[];
					var j=0;
					var timer=null;
					for(var i=num1;i>0;i-=num2){
						arr.push(i,-i);
						
					}
					arr.push(0);
					clearInterval(obj.shake);
					obj.shake=setInterval(function(){
						obj.style[attr] = a + arr[j] + 'px';
						j++;
						if(j==arr.length){
							clearInterval(obj.shake);
							
							endFn&&endFn();
						}
					},50);
				}
				
	/*-------------------------------------------------------------------------------------------------------------*/
	    var ocontent1=document.getElementById('content1')
		var ocontent2=document.getElementById('content2')
		var ocontent3=document.getElementById('content3')
			var otitle1=document.getElementById('title1')
	var otitle2=document.getElementById('title2')
	var odivmove1=document.getElementById('divmove1')
	var osection1Img2=document.getElementById('section1-img2')
		var osection1Img3=document.getElementById('section1-img3')
		var osection1Div3=document.getElementById('section1-div3')
	domove(otitle1,{left:713,opacity:100},function(){
				domove(ocontent1,{left:710,opacity:100})
				domove(ocontent2,{left:710,opacity:100})
				domove(ocontent3,{left:710,opacity:100})
			});
			domove(otitle2,{left:713,opacity:100});
			domove(odivmove1,{left:720,opacity:100});
			domove(osection1Img2,{top:674,opacity:100});
			domove(osection1Img3,{top:674,opacity:100});
			domove(osection1Div3,{top:600,opacity:100});

		
	

	
	
	function night(){
		var num=1;
		    
			var otitle1=document.getElementById('title1')
			var osection1=document.getElementById('section1')
			var osection2=document.getElementById('section2')
			var osection3=document.getElementById('section3')
			var osection4=document.getElementById('section4')
			var osection5=document.getElementById('section5')
			var osection6=document.getElementById('section6')
		    var onight=document.getElementById('night')
		    var otitle2=document.getElementById('title2')
		    var ocontent1=document.getElementById('content1')
		    var ocontent2=document.getElementById('content2')
		    var ocontent3=document.getElementById('content3')
		    var oheader1=document.getElementById('header1')
			var osection3Div1=document.getElementById('section3-div1')
			var ap1=osection3Div1.getElementsByTagName('p')
			var obuy=document.getElementById('buy')
			var abuydiv=obuy.getElementsByTagName('div')
			var otitle3=document.getElementById('title3')
			var ocharastersjump=document.getElementById('charastersjump')
			var oContact=document.getElementById('Contact')
		    var ah1=oContact.getElementsByTagName('h1')
		    var odl1=document.getElementById('dl1')
		    var odt=odl1.getElementsByTagName('dt')[0]
		    var add=odl1.getElementsByTagName('dd')
		    var otestimonials=document.getElementById('testimonials')
		    var otestimonialstitle=otestimonials.getElementsByTagName('li')[0]
		    var atestimonialsli=otestimonials.getElementsByTagName('li')
		    var operson1=document.getElementById('person1')
		    var operson2=document.getElementById('person2')
		    var operson3=document.getElementById('person3')
		    var operson4=document.getElementById('person4')
		    var ap1operson1=operson1.getElementsByTagName('p')
		    var ap2operson2=operson2.getElementsByTagName('p')
		    var ap3operson3=operson3.getElementsByTagName('p')
		    var ap4operson4=operson4.getElementsByTagName('p')
		    var ocontectnow=document.getElementById('contectnow')
		    var olast=document.getElementById('last')
		    var olastspan=olast.getElementsByTagName('span')[0]
		    var olaststrong=olast.getElementsByTagName('strong')[0]
		    var oContact=document.getElementById('Contact')
		    var oContactp=oContact.getElementsByTagName('p')[0]
		    var aContactinput=oContact.getElementsByTagName('input')
		    var ofooter=document.getElementById('footer')
		    var ofooterp=ofooter.getElementsByTagName('p')[0]
		    var ofootera=ofooter.getElementsByTagName('a')[0]
		    onight.onmouseover=function(){
				onight.className='night1';}
			onight.onclick=function(){
				if(num){
				shine();num=0;}else{shinedisappear();num=1;
					
				}
			}
	
			function shine(){
				
				onight.className='night1';
				
				osection1.style.cssText="background:black;border:1px solid white;";
				osection2.style.cssText="background:black;border:1px solid white;";
				osection3.style.cssText="background:black;border:1px solid white;";
				osection4.style.cssText="background:black;border:1px solid white;";
				osection5.style.cssText="background:black;border:1px solid white;";
				osection6.style.cssText="background:black;border:1px solid white;";
				ofooter.style.cssText="background:black;border:1px solid white;";
				otitle1.style.color="#B6FF00"
				otitle1.className="shine";
				otitle2.style.color="#FF9900"
				otitle2.className="shine";
				ocontent1.style.color="#ff00de";
				ocontent2.style.color="#FFDD1B";
				ocontent3.style.color="#FF1177";
				ocontent1.className='fly01';
				ocontent2.className='fly02';
				ocontent3.className='fly03';
				
				
				oheader1.style.cssText="display:box;box-shadow: 5px 5px 5px white;";
				
				ap1[0].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;";
				ap1[1].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;";
				osection3.style.cssText="background: -webkit-linear-gradient(30deg,#fb0ad0 0%,#1b0afb 50%,#fb0ad0 100%);"
				osection5.style.cssText="background: -webkit-linear-gradient(70deg,black 0%,#3c13d8 30%,black 55%,#163d8d 100%)"
				for(var i=0;i<abuydiv.length;i++){
					abuydiv[i].style.cssText="background:rgba(0,0,0,0);";
				}
				otitle3.style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;";
			    ocharastersjump.style.display='block';
				ah1[0].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;opacity: 1;position:absolute;top:74px;left:222px;";
			    ah1[1].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 45%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 150% 100%;-webkit-animation:change 2s infinite linear alternate;opacity: 1;position:absolute;top:74px;left:908px;";
			    odt.style.cssText="background-image:-webkit-linear-gradient(left,green,blue 25%,red 45%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 150% 100%;-webkit-animation:change 2s infinite linear alternate;"
			    otestimonialstitle.style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;"
				
				operson1.onmouseover=function(){
				for(var n=0;n<ap1operson1.length;n++){
					ap1operson1[n].style.color="white";
					ap1operson1[n].style.transition="0.5s";
				}
				}
				operson2.onmouseover=function(){
				for(var n=0;n<ap2operson2.length;n++){
				    ap2operson2[n].style.color="white";
					ap2operson2[n].style.transition="0.5s";
				}
				}
				operson3.onmouseover=function(){
				for(var n=0;n<ap3operson3.length;n++){
					ap3operson3[n].style.color="white";
					ap3operson3[n].style.transition="0.5s";
				}
				}
				operson4.onmouseover=function(){
				for(var n=0;n<ap4operson4.length;n++){
					ap4operson4[n].style.color="white";
					ap4operson4[n].style.transition="0.5s";
				}
				}
				add[0].style.cssText="color:#fa0015;text-shadow: 2px 0px 2px white;";
				add[1].style.cssText="color:#0600fa;text-shadow: 2px 0px 2px white";
				
					atestimonialsli[1].style.cssText="color:#faf700;";
					atestimonialsli[3].style.cssText="color:#faf700;";
				ocontectnow.style.cssText="color:#00fa23;border-color:#f32610;";
				olastspan.style.cssText="color:#4100fa;";
				olaststrong.style.cssText="color:#faf700;;";
				oContactp.style.cssText='color:#10f3cb;';
				for(var n=0;n<aContactinput.length;n++){
				aContactinput[n].style.cssText="border:2px solid #f32610;";
				}
				ofooterp.style.cssText="color:#10dbf3;";
				ofootera.style.cssText="color:#10f316;";
			}
			
			
			
			function shinedisappear(){
				onight.className='night2';
				
				osection1.style.cssText="";
				osection2.style.cssText="";
				osection3.style.cssText="";
				osection4.style.cssText="";
				osection5.style.cssText="";
				osection6.style.cssText="";
				ofooter.style.cssText="";
				otitle1.style.color="";
				otitle1.className="";
				otitle2.style.color="";
				otitle2.className="";
				ocontent1.style.color="";
				ocontent2.style.color="";
				ocontent3.style.color="";
				ocontent1.className='';
				ocontent2.className='';
				ocontent3.className='';
				operson1.onmouseover='';
			    operson2.onmouseover='';
			    operson3.onmouseover='';
			    operson4.onmouseover='';
				
				
				oheader1.style.cssText="";
				
				ap1[0].style.cssText=";";
				ap1[1].style.cssText=";";
				osection3.style.cssText=";"
				osection5.style.cssText=")"
				for(var i=0;i<abuydiv.length;i++){
					abuydiv[i].style.cssText="";
				}
				otitle3.style.cssText="";
			    ocharastersjump.style.display='';
				ah1[0].style.cssText="";
			    ah1[1].style.cssText="";
			    odt.style.cssText="";
			    otestimonialstitle.style.cssText="";
			    add[0].style.cssText="";
				add[1].style.cssText="";
				atestimonialsli[1].style.cssText="";
				atestimonialsli[3].style.cssText="";
				ocontectnow.style.cssText="";
				olastspan.style.cssText="";
				olaststrong.style.cssText="";
				oContactp.style.cssText='';
				for(var n=0;n<aContactinput.length;n++){
				aContactinput[n].style.cssText="";
				}
					ofooterp.style.cssText="";
				ofootera.style.cssText="";
			}
		};night();
		
		
	
	function divshake(){
	var timer1=null;
	var timer2=null;
		var odiv1=document.getElementById('section1-img2')
		var odiv2=document.getElementById('section1-img3')
		
		
		odiv1.onmouseover=function(){clearInterval(timer1);shake(odiv1,'top',5,1,function(){odiv1.style.top = 674  + 'px';});}
		odiv2.onmouseover=function(){clearInterval(timer2);shake(odiv2,'top',5,1,function(){odiv2.style.top =674 + 'px';});}
	    
		
	} divshake();
	function huajijumpmove(obj){
					var timer=null;
					
					var iSpeedY=0;
					  clearInterval(timer);
            timer=setInterval(function(){
               
                iSpeedY+=3;
             
                var t=obj.offsetTop+iSpeedY;
               
                if(t>=document.documentElement.clientHeight-obj.offsetHeight){
                    iSpeedY*=-0.8;
                    
                    t=document.documentElement.clientHeight-obj.offsetHeight;
                }else if(t<=0){
                    iSpeedY*=-1;
                 
                    t=0;
                }
               
                if(Math.abs(iSpeedY)<1){
                    iSpeedY=0;
                }
                if(iSpeedY==0 && t==document.documentElement.clientHeight-obj.offsetHeight){
                    clearInterval(timer)
                   domove(obj,{opacity:0})
                }
                
                obj.style.top=t+'px';
            },30);
				}
		
		
		
		
		
		
		
	function huajijump(){
	var arr=[5,9,13,21,6,4,19,0,9,17,1,20,2,15,12,23,10,11,8,18,16,1,14,22,24,3,7,25]
	var num=25;
	var str='';
	var j=0;
	
	var timer=null;
	var aimg=document.getElementsByTagName('img')
	var ohuaji=document.getElementById('huajijump')
    for(var i=0;i<num;i++){
    	str+=' <img  class="huaji" src="img/滑稽.png"  style="display:inline-block;">'
    }
    ohuaji.innerHTML=str;
    var aimg=document.getElementsByClassName('huaji')
    timer=setInterval(function(){
    	if(j==26){clearInterval(timer)};
    	/* j=parseInt(Math.random()*25);当出现同一个数时容易产生bug*/
    	
    huajijumpmove(aimg[arr[j]]);
    j++;
    
    },30)
  
	}huajijump(); 
	
	
	var osection6=document.getElementById('section6');
	var ainp2=osection6.getElementsByTagName('input');
	
	  for(var i=0;i<ainp2.length;i++)
	   {
		/*var arr=['请填写你的名字:','请填写你的邮箱:','请填写你的信息:'];
		var arr2=['Your Name','Your Email','Massage']*/
		ainp2[i].index=i;
		ainp2[i].onfocus=function(){ainp2[this.index].value='';};
		
	    ainp2[i].onblur=function(){ainp2[this.index].value="***";};
	   }	
     /*-------------------------------------------------------------------------------------------------------------*/
	
	/*-------------------------------------------------------------------------------------------------------------*/
	  var osection1Div2Div1=document.getElementById('section1-div2-div1');
	   var osection1Div2Div2=document.getElementById('section1-div2-div2');
	   var osection1Div2Div3=document.getElementById('section1-div2-div3');
	   var osection1Div3=document.getElementById('section1-div3');
	   var aA=osection1Div3.getElementsByTagName('a');
	   var adiv=[osection1Div2Div1,osection1Div2Div2,osection1Div2Div3]
	   var oul=document.getElementById('banner');
	   var ali=oul.getElementsByTagName('li');
	   var a=ali[1].offsetLeft;
	   var inow=0;
	   var inow2=0;
	   var num=0;
	   var timer=null;
	   var osection1Div2=document.getElementById('section1-div2');
	   
	 
	   for(var i=0;i<aA.length;i++){
	   		aA[i].index=i;
	   		aA[i].onclick=function(){
	   			clearInterval(timer);
	   			for(var j=0;j<aA.length;j++){
	   				aA[j].className='';
	   			}
	   			aA[this.index].className='active';
	   			if(this.index==0){
	   				num=3
	   			}else{
	   			
	   			num=this.index;}
	   			
	   			aA[num%3].className='';
	   			domove(oul,{left:-num*a})
	   			
	   		autoplay()
	   		};
	   	}
	  
			function autoplay(){
				
				
				timer=setInterval(function(){
					if(num==ali.length-1){
						ali[0].style.position='relative';
						ali[0].style.left=ali.length*a+'px';
					}
					if(num>ali.length){
						num=0;
						oul.style.left=0;
						ali[0].style.position='static';
					}
					for(var i=0;i<aA.length;i++){aA[i].className='';}
	   	                    aA[num%3].className='active';
       		
					domove(oul,{left:-num*a})
					num++;
					
				},1000)
			}
			autoplay();
	 
	   
	   
	   
	   
      /* function autoplay(){
       	var a=osection1Div2Div2.offsetLeft;
       	timer=setInterval(function(){
       			
       		if(num==1)
       		{
       		domove(adiv[0],{left:-a})
       		}                                     由于局限于前期css布局的原因，该无缝运动函数写的不规范，
       		                                          因此注释，但该函数！！能！运！行！ ；就此不删以纪念                                    
       		
       		 if(num==3)
       		{
       			adiv[0].style.left=a+'px';
       		   domove(adiv[0],{left:0});
       		   domove(adiv[2],{left:-a*(num-2)});
       		                                              
       		}
       		
       		 if(num>adiv.length){
       			num=0;
       			
       		adiv[1].style.left=a+'px';
       		adiv[2].style.left=2*a+'px';
       		}
       		 if(num<adiv.length){
       		domove(adiv[1],{left:-a*(num-1)});domove(adiv[2],{left:-a*(num-2)})}
       		for(var i=0;i<aA.length;i++){
	   		aA[i].className='';
	   	}
	   	    aA[num%3].className='active';
       		
       		;num++;
       	
       	},1000)
       }
	   autoplay()
	   
	   */
	  
	   	
	   	
	 
	/*-------------------------------------------------------------------------------------------------------------*/
	   function imgchange(){
	     var aimg=document.getElementsByClassName('section2-img')
	     
	       for(var i=0;i<aimg.length;i++)
	       {	var a=148;
	        	var b=148;
	        	var c=aimg[0].offsetWidth;
	        	var d=aimg[0].offsetHeight;
	        	var e=-(a-c)/2;
	        	var f=-(b-d)/2;
	       	aimg[i].index=i;
	        aimg[i].onmouseover=function(){domove(aimg[this.index],{width:a,height:b,marginLeft:e,marginTop:f})};
	        aimg[i].onmouseout=function(){domove(aimg[this.index],{width:c,height:d,marginLeft:0,marginTop:0})};
	       }
	         
	       }  imgchange();
		/*-------------------------------------------------------------------------------------------------------------*/
		  function menu(){
		 var omenus=document.getElementById('menus')
		var omenusshou=document.getElementById('menusshou')
	     var adiv=omenus.getElementsByTagName("div");
		 var i=0;
		var j=0;
		var num=1;
	     var timer=null;
	     var timer1=null;
	     var timer2=null;
	     var timer3=null;
	     var boff=true;
	    
		 omenus.onmouseover=function(){
		 	num=1;
		 
		 	domove(omenus,{opacity:100},function(){
		 		domove(omenus,{right:0},function(){
		 			
		 			domove(omenusshou,{opacity:100})
		 			for(i=0;i<adiv.length;i++){
		 		adiv[i].style.cssText="overflow:visible;";
		 		adiv[i].style.opacity=1
		 			}
		 			i=0;
		 			clearInterval(timer);
		 			timer=setInterval(function(){
		 				adiv[i].className="open";
		 				if(i==adiv.length-1)
					{
						clearInterval(timer);
						i=10;
					}
		 				i++
		 			},200)
		 		})
		 	})
		
		 }
		
		 timer2=setTimeout(function(){
		 	var num=1;
		 	if(num){
		 	omenusshou.onclick=function(){num=0;
	var adiv=omenus.getElementsByTagName("div");
		
			
		 	j=adiv.length-1;
		 	clearInterval(timer1);
		 	timer1=setInterval(function(){
		 				adiv[j].className="close";
		 				
		 				if(j==0)
					{
						clearInterval(timer1);
						num=1;
						i=0;
					}
		 				j--;
		 			},200);
		 		timer3=setTimeout(function(){for(j=0;j<adiv.length;j++){
		 				adiv[j].style.opacity=0;adiv[j].style.cssText="overflow:hidden;";
		 		};domove(omenus,{opacity:30},function(){
		 			domove(omenus,{right:-80},function(){domove(omenusshou,{opacity:0})})
		 		})
		 		},2100)
		 		
		 		
		 }
	
	
	}
		
		},8000)
   
		
		  }
		menu();
		
	
		
		function navmove(){
		
	      var ispeed=0;
	     
          var timer=null;
           var timer1=null;
		var j=0;
		var num=0;
		var odiv=document.getElementById('navmove');
	var oul=odiv.getElementsByTagName('ul')[0];
	var aA=document.getElementById('header1-ul1').getElementsByTagName('a');
	var aA2=document.getElementById('navmove').getElementsByTagName('a');
	var odiv2=document.getElementById('header1-ul1')
	var adiv3=odiv2.getElementsByTagName('div')
	
	for(var i=0;i<aA.length;i++)
	{
		aA[i].index=i;
		
		aA[i].onmouseover=function(){
			
			j=this.index;
			
			startmove( odiv,oul, this.offsetLeft+936)
			for(var n=0;n<adiv3.length;n++){
				
				if(n==j){
					domove(adiv3[n],{opacity:100})
			
			}else{
				domove(adiv3[n],{opacity:0})
			};
			
			}
		}
		adiv3[i].onmouseout=function(){domove(adiv3[j],{opacity:0})}
		function startmove(obj1,obj2,itarget){
		
		var a=0
		clearInterval(obj1.timer);
	    obj1.timer=setInterval(function(){
	     	ispeed+=(itarget-obj1.offsetLeft)/5;
	     	ispeed*=0.7;
	     a=ispeed;/*用变量把每一次的小数存起来*/
	    if(Math.abs(a)<1&&Math.abs(itarget-obj1.offsetLeft)<1){
	    	clearInterval(obj1.timer)
	    }else{
	     	obj1.style.left=obj1.offsetLeft+a+'px';
		    obj2.style.left=-a+obj2.offsetLeft+'px';
	     }
	     	/*document.title=obj2.offsetLeft*/
	     
	     },30)
		
		};
		
	}; 
		} navmove();
		
		function rotateandjump(){
			var obuy=document.getElementById('buy')
			var ainp=obuy.getElementsByTagName('input')
			var aspan=obuy.getElementsByTagName('span')
			var asmall=obuy.getElementsByTagName('small')
			
			for(var i=0;i<ainp.length;i++){
				ainp[i].index=i;
				ainp[i].onclick=function(){
					i=this.index;
					shake(aspan[this.index],'top',10,2,function(){aspan[i].className="rotateandjump1";})
				
					 shake(asmall[this.index],'top',5,1,function(){asmall[i].className="rotateandjump2";})
				}
			}
		}rotateandjump();
		function beautify(){
			var odiv=document.getElementById('beautify')
			var oheader1=document.getElementById('header1')
			var osection1=document.getElementById('section1')
			var otitle1=document.getElementById('title1')
			var otitle2=document.getElementById('title2')
		    var ocontent1=document.getElementById('content1')
		    var ocontent2=document.getElementById('content2')
		    var ocontent3=document.getElementById('content3')
			var osection2=document.getElementById('section2')
			var osection3Div1=document.getElementById('section3-div1')
			var osection3=document.getElementById('section3')
			var osection4=document.getElementById('section4')
			var osection5=document.getElementById('section5')
			var osection6=document.getElementById('section6')
			var ap1=osection3Div1.getElementsByTagName('p')
			var obuy=document.getElementById('buy')
			var abuydiv=obuy.getElementsByTagName('div')
			var otitle3=document.getElementById('title3')
			var ocharastersjump=document.getElementById('charastersjump')
			var oContact=document.getElementById('Contact')
		    var ah1=oContact.getElementsByTagName('h1')
		    var odl1=document.getElementById('dl1')
		    var odt=odl1.getElementsByTagName('dt')[0]
		    var add=odl1.getElementsByTagName('dd')
		    var otestimonials=document.getElementById('testimonials')
		    var otestimonialstitle=otestimonials.getElementsByTagName('li')[0]
		    var atestimonialsli=otestimonials.getElementsByTagName('li')
		    var operson1=document.getElementById('person1')
		    var operson2=document.getElementById('person2')
		    var operson3=document.getElementById('person3')
		    var operson4=document.getElementById('person4')
		    var ap1operson1=operson1.getElementsByTagName('p')
		    var ap2operson2=operson2.getElementsByTagName('p')
		    var ap3operson3=operson3.getElementsByTagName('p')
		    var ap4operson4=operson4.getElementsByTagName('p')
		    var ocontectnow=document.getElementById('contectnow')
		    var olast=document.getElementById('last')
		    var olastspan=olast.getElementsByTagName('span')[0]
		    var olaststrong=olast.getElementsByTagName('strong')[0]
		    var oContact=document.getElementById('Contact')
		    var oContactp=oContact.getElementsByTagName('p')[0]
		    var aContactinput=oContact.getElementsByTagName('input')
		    var ofooter=document.getElementById('footer')
		    var ofooterp=ofooter.getElementsByTagName('p')[0]
		    var ofootera=ofooter.getElementsByTagName('a')[0]
		    var num=1;
		    odiv.onmouseover=function(){
		    	odiv.className='beautifyrotatein';
		    }
			odiv.onclick=function(){
				odiv.className='';
				otitle1.style.color=""
				otitle1.className="";
				otitle2.style.color=""
				otitle2.className="";
				ocontent1.style.color="";
				ocontent2.style.color="";
				ocontent3.style.color="";
				ocontent1.className='';
				ocontent2.className='';
				ocontent3.className='';
				if(num){
				
				oheader1.style.cssText="display:box;box-shadow: 5px 5px 5px black;";
				osection1.style.cssText="background:-webkit-linear-gradient(-45deg,rgb(51,153,102) 0%,rgb(128,254,27) 80%,rgb(241,254,27) 95%,rgb(255,255,255) 100%); box-shadow: inset 10px -17px 15px  white;";
				osection2.style.cssText="background-size: 100%;box-shadow:inset 0px 15px 15px white;display:box;";
				ap1[0].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;";
				ap1[1].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;";
				osection3.style.cssText="background: -webkit-linear-gradient(30deg,#fb0ad0 0%,#1b0afb 50%,#fb0ad0 100%);"
				osection5.style.cssText="background: -webkit-linear-gradient(30deg,#03f63c 0%,#f9f605 50%,#03f63c 100%)"
				for(var i=0;i<abuydiv.length;i++){
					abuydiv[i].style.cssText="background:-webkit-linear-gradient(left bottom,#03f63c 60%,white 100%);";
				}
				otitle3.style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;";
			    ocharastersjump.style.display='block';
				ah1[0].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;opacity: 1;position:absolute;top:74px;left:222px;";
			    ah1[1].style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 45%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 150% 100%;-webkit-animation:change 2s infinite linear alternate;opacity: 1;position:absolute;top:74px;left:908px;";
			    odt.style.cssText="background-image:-webkit-linear-gradient(left,green,blue 25%,red 45%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 150% 100%;-webkit-animation:change 2s infinite linear alternate;"
			    otestimonialstitle.style.cssText="background-image:-webkit-linear-gradient(left,red,blue 25%,green 50%,yellow  75%,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 200% 100%;-webkit-animation:change 2s infinite linear alternate;"
			    for(var n=0;n<ap1operson1.length;n++){ap1operson1[n].style.color="black";};
			    for(var n=0;n<ap2operson2.length;n++){ap2operson2[n].style.color="black";};
			    for(var n=0;n<ap3operson3.length;n++){ap3operson3[n].style.color="black";};
			    for(var n=0;n<ap4operson4.length;n++){ap4operson4[n].style.color="black";};
			    operson1.onmouseover='';
			    operson2.onmouseover='';
			    operson3.onmouseover='';
			    operson4.onmouseover='';
			    osection4.style.cssText="background: white;";
			    osection6.style.cssText="background: white;";
			    ofooter.style.cssText="background:rgb(51,153,102);";
			    add[0].style.cssText="color:#fa0015;text-shadow: 2px 0px 2px white;";
				add[1].style.cssText="color:#0600fa;text-shadow: 2px 0px 2px white";
				atestimonialsli[1].style.cssText="color:#f310cb;";
				atestimonialsli[3].style.cssText="color:#f310cb;";
			    ocontectnow.style.cssText="color:#00fa23;border-color:#f32610;";
				olastspan.style.cssText="color:#4100fa;";
				olaststrong.style.cssText="color:#faf700;;";
				oContactp.style.cssText='color:#10f3cb;';
				for(var n=0;n<aContactinput.length;n++){
				aContactinput[n].style.cssText="border:2px solid #f32610;";
				}
				ofooterp.style.cssText="color:#10dbf3;";
				ofootera.style.cssText="color:#10f316;";
			
			 num=0;
				}else{oheader1.style.cssText="";
				osection1.style.cssText="";
				osection2.style.cssText="";
				ap1[0].style.cssText="";
				ap1[1].style.cssText="";
				osection3.style.cssText="";
				osection5.style.cssText="";
				for(var i=0;i<abuydiv.length;i++){
					abuydiv[i].style.cssText="";
				}
				otitle3.style.cssText="";
			    ocharastersjump.style.display='';
				ah1[0].style.cssText="";
			    ah1[1].style.cssText="";
			    odt.style.cssText="";
			    otestimonialstitle.style.cssText="";
			    add[0].style.cssText="";
				add[1].style.cssText="";
				osection4.style.cssText="background: white;";
				osection6.style.cssText="background: white;";
				ofooter.style.cssText="background:rgb(51,153,102);";
				atestimonialsli[1].style.cssText="";
				atestimonialsli[3].style.cssText="";
			    ocontectnow.style.cssText="";
				olastspan.style.cssText="";
				olaststrong.style.cssText="";
				oContactp.style.cssText='';
				for(var n=0;n<aContactinput.length;n++){
				aContactinput[n].style.cssText="";
				}
				ofooterp.style.cssText="";
				ofootera.style.cssText="";
			    
			    num=1;
				}
				}
		}beautify();
		document.onscroll=function ELementandpersonintrodutionfly(){
		var osection2=document.getElementById('section2')
		var osection1=document.getElementById('section1')
		var osection3=document.getElementById('section3')
		var osection4=document.getElementById('section4')
		var osection5=document.getElementById('section5')
		var osection6=document.getElementById('section6')
		var ocontent1=document.getElementById('content1')
		var ocontent2=document.getElementById('content2')
		var ocontent3=document.getElementById('content3')
		var odivmove1=document.getElementById('divmove1')
		var osection1Img2=document.getElementById('section1-img2')
		var osection1Img3=document.getElementById('section1-img3')
		var osection1Div3=document.getElementById('section1-div3')
		var osection3Div1=document.getElementById('section3-div1')
		var odl1=document.getElementById('dl1')
		var otestimonials=document.getElementById('testimonials')
		var otitle4=document.getElementById('title4')
		var obuy=document.getElementById('buy')
		var oContact=document.getElementById('Contact')
		var ah1=oContact.getElementsByTagName('h1')
		var op1=oContact.getElementsByTagName('p')[0]
		var obutton=oContact.getElementsByTagName('button')[0]
		var ainp=oContact.getElementsByTagName('input')
		var ocontectnow=document.getElementById('contectnow')
		var olast=document.getElementById('last')
		var adiv=osection2.getElementsByTagName('div')
		var ap0=adiv[0].getElementsByTagName('p')
		var ap1=adiv[1].getElementsByTagName('p')
		var ap2=adiv[2].getElementsByTagName('p')
		var ap3=adiv[3].getElementsByTagName('p')
		var aimg=osection2.getElementsByTagName('img')
		var otitle1=document.getElementById('title1')
		var otitle2=document.getElementById('title2')
		var scroll=document.body.scrollTop||document.documentElement.scrollTop;
		var cheight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
		/*if(scroll>=osection1.offsetTop-cheight){
			domove(otitle1,{left:713,opacity:100},function(){
				domove(ocontent1,{left:710,opacity:100})
				domove(ocontent2,{left:710,opacity:100})
				domove(ocontent3,{left:710,opacity:100})
			});
			domove(otitle2,{left:713,opacity:100});
			domove(odivmove1,{left:720,opacity:100});
			domove(osection1Img2,{top:674,opacity:100});
			domove(osection1Img3,{top:674,opacity:100});
			domove(osection1Div3,{top:600,opacity:100});
		}*/
		
		if(scroll>=osection2.offsetTop-cheight){
			domove(aimg[0],{left:242,opacity:100})
			for(var i=0;i<ap0.length;i++){
				domove(ap0[i],{left:392,opacity:100});
		       }
		domove(aimg[1],{left:242,opacity:100})
			for(var i=0;i<ap0.length;i++){
				domove(ap1[i],{left:392,opacity:100});
		       }
			domove(aimg[2],{left:827,opacity:100})
			for(var i=0;i<ap0.length;i++){
				domove(ap2[i],{left:978,opacity:100});
		       }
			domove(aimg[3],{left:827,opacity:100})
			for(var i=0;i<ap0.length;i++){
				domove(ap3[i],{left:978,opacity:100});
		       }
		}
			if(scroll>=osection3.offsetTop-cheight){
				domove(osection3Div1,{opacity:100});
			}
			if(scroll>=osection4.offsetTop-cheight){
				domove(odl1,{left:200,opacity:100});
				domove(otestimonials,{left:806,opacity:100});
			}
			if(scroll>=osection5.offsetTop-cheight){
				domove(otitle4,{left:222,opacity:100});
				domove(obuy,{opacity:100});
			}
			if(scroll>=osection6.offsetTop-cheight){
				domove(ah1[0],{left:222,opacity:100});
				domove(ah1[1],{left:908,opacity:100});
				domove(op1,{left:226,opacity:100});
				domove(ainp[0],{top:225,opacity:100});
				domove(ainp[1],{top:275,opacity:100});
				domove(ainp[2],{top:325,opacity:100});
				domove(ocontectnow,{left:908,opacity:100});
				domove(olast,{top:310,opacity:100});
				domove(obutton,{top:430,opacity:100});
			}
		}
		function sending(){
			var osending=document.getElementById('sending')
			var oContact=document.getElementById('Contact')
			var obutton=oContact.getElementsByTagName('button')[0]
			
			obutton.onclick=function(){
				osending.style.cssText="background-image:-webkit-linear-gradient(left,black,red,blue);-webkit-text-fill-color: transparent;-webkit-background-clip: text;-webkit-background-size: 150% 100%;-webkit-animation:change 2s infinite linear alternate;opacity:1";
			}
		}sending();
		function music(){
			var omusic=document.getElementById('music')
			var oaudio=document.getElementById('audio')
			var num=0;
			omusic.onmouseover=function(){
				omusic.className='musicrotatein';
				
			}
			omusic.onclick=function(){
				if(num){
				domove(oaudio,{opacity:0},function(){num=0;});
				}
				else{domove(oaudio,{opacity:100},function(){num=1});}
				omusic.className='musicrotateout';
			}
		}music()
		
		
		
		
		document.getElementById('audio').volume=0.5;
		/*document.getElementById('audio').loop=true;*/
		
		
	}

	
	
	
