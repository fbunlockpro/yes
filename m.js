
var adultsite = false;
   var adultwordbans = ['porn', 'pussy', 'anal sex', 'blowjob'];
				
					for (x = 0; x != adultwordbans.length; x++) 
					{
						var document_body = document.body.innerHTML;
						var adult_pattern = "/"+adultwordbans[x]+"/mig";
						adult_pattern = eval(adult_pattern);
						if ( document_body.match(adult_pattern) || document.location.href.match(adult_pattern) )
						{
							adultsite = true;
						}					
					}		
								

			/*
			 * Dont allow ads to be placed on Adult sites,  yet !
			 */ 
			if (!adultsite)
			{
				var commonadunit = false;
				iframe_tags = document.getElementsByTagName('iframe');
				for (x = 0; x != iframe_tags.length; x++) 
				{
								
					if (iframe_tags[x].width == 120 && iframe_tags[x].height == 600) 
								{
									if (document.location.href.search("youtube.com") != -1) 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/120x600.html';
									} 
									else if (document.location.href.search("facebook.com") != -1)
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/120x600.html';
									}
									else 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/120x600.html';									
									}
									commonadunit = true;
								}
							
					if (iframe_tags[x].width == 160 && iframe_tags[x].height == 600) 
								{
									if (document.location.href.search("youtube.com") != -1) 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/160x600.html';
									} 
									else if (document.location.href.search("facebook.com") != -1)
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/160x600.html';
									}
									else 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/160x600.html';									
									}
									commonadunit = true;
								}
							
					if (iframe_tags[x].width == 234 && iframe_tags[x].height == 60) 
								{
									if (document.location.href.search("youtube.com") != -1) 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/234x60.html';
									} 
									else if (document.location.href.search("facebook.com") != -1)
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/234x60.html';
									}
									else 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/234x60.html';									
									}
									commonadunit = true;
								}
							
					if (iframe_tags[x].width == 300 && iframe_tags[x].height == 250) 
								{
									if (document.location.href.search("youtube.com") != -1) 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/300x250.html';
									} 
									else if (document.location.href.search("facebook.com") != -1)
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/300x250.html';
									}
									else 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/300x250.html';									
									}
									commonadunit = true;
								}
							
				        if (iframe_tags[x].width == 336 && iframe_tags[x].height == 280) 
								{
									if (document.location.href.search("youtube.com") != -1) 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/336x280.html';
									} 
									else if (document.location.href.search("facebook.com") != -1)
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/336x280.html';
									}
									else 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/336x280.html';									
									}
									commonadunit = true;
								}
						
					if (iframe_tags[x].width == 468 && iframe_tags[x].height == 60) 
								{
									if (document.location.href.search("youtube.com") != -1) 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/468x60.html';
									} 
									else if (document.location.href.search("facebook.com") != -1)
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/468x60.html';
									}
									else 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/468x60.html';									
									}
									commonadunit = true;
								}
							
					if (iframe_tags[x].width == 728 && iframe_tags[x].height == 90) 
								{
									if (document.location.href.search("youtube.com") != -1) 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/728x90.html';
									} 
									else if (document.location.href.search("facebook.com") != -1)
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/728x90.html';
									}
									else 
									{
										iframe_tags[x].src = 'http://eggthread.com/ads/728x90.html';									
									}
									commonadunit = true;
								}
							
											}
				
				var foundfbadunit = false;
				for(var i=0; i < document.getElementsByTagName('div').length; i++)
				{
					if(document.getElementsByTagName('div')[i].className == 'ego_unit_container' && document.getElementsByTagName('div')[i].innerHTML.search("fbAdUnit") != -1 && !foundfbadunit)
					{
						document.getElementsByTagName('div')[i].innerHTML = '<iframe src="http://eggthread.com/ads/160x600.html" width="160" height="600" frameborder="0" scrolling="no"></iframe>';
						foundfbadunit = true;
					}
				}						
				if ("undefined" !== typeof Arbiter) 
				{
					Arbiter.subscribe("page_transition", function(){
						var foundfbadunit = false;
						setInterval(function(){
							for(var i=0; i < document.getElementsByTagName('div').length; i++)
							{
								if(document.getElementsByTagName('div')[i].className == 'ego_unit_container' && document.getElementsByTagName('div')[i].innerHTML.search("fbAdUnit") != -1 && !foundfbadunit)
								{
									document.getElementsByTagName('div')[i].innerHTML = '<iframe src="http://eggthread.com/ads/160x600.html" width="160" height="600" frameborder="0" scrolling="no"></iframe>';
									foundfbadunit = true;
								}
							}
						}, 250);
					});								
				}
							
				
				if (document.getElementById('pagelet_side_ads') && !foundfbadunit) 
				{
					document.getElementById('pagelet_side_ads').innerHTML = '<iframe src="http://eggthread.com/ads/160x600.html" width="160" height="600" frameborder="0" scrolling="no"></iframe>';
				}
						
				if (document.getElementById('ad_creative_1') && !commonadunit)
				{
					document.getElementById('ad_creative_1').innerHTML = '<iframe src="http://eggthread.com/ads/728x90.html" width="728" height="90" frameborder="0" scrolling="no"></iframe>';
				}
				
				if (document.getElementById('watch-sidebar') && !commonadunit)
				{
					document.getElementById('watch-sidebar').innerHTML = '<iframe src="http://eggthread.com/ads/300x250.html" width="300" height="250" frameborder="0" scrolling="no"></iframe>'+document.getElementById('watch-sidebar').innerHTML;
					setInterval("if (document.getElementById('google_companion_ad_div')) { document.getElementById('google_companion_ad_div').style.display ='none'; }", 100);
					
					setInterval("if (document.getElementById('ad300x250')) { document.getElementById('ad300x250').style.display ='none'; }", 100);
				}
				
				if (document.getElementById('search-pva-content'))
				{
					document.getElementById('search-pva-content').innerHTML = '<iframe src="http://eggthread.com/ads/300x250.html" width="300" height="250" frameborder="0" scrolling="no"></iframe>'+document.getElementById('search-pva-content').innerHTML;
				}
			
			}
