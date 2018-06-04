$(document).ready(function() {

    function displayPhotos(data) {
      var photoHTML = "";
		$.each(data,function(i,obj) {
			//display photo galllery
			if(obj.gallery){
				$.each(obj.gallery,function(i,photo) {
					if ( i === 14 ) {
					  return false;
					}
					photoHTML += '<div class="picbox"><figure class=""><div><img src="' + photo.url + '" class="frame"></div><figcaption><h3>' + photo.description + '</h3><span>' + photo.count + '</span></figcaption></figure></div>';
				});
				$('.gallery').html(photoHTML);
			}
			//display photo slider
			if(obj.slider){
				photoHTML = ""
				photoHTML += '<div class="slider_wrapper"><ul id="image_slider">'
				$.each(obj.slider,function(i,photo) {
					console.log(obj.slider.length);
					photoHTML += '<li><img src="' + photo.url + '" class="frame"><div><span class="count">'+ i +'</span> /<span> ' + obj.slider.length + '</span><div class="description">' + photo.description + '</div><div class="autor">'+ photo.autor +'</div></div></li>';
				});
				photoHTML += '</ul><span class="nvgt" id="prev"></span><span class="nvgt" id="next"></span></div>';
				$('.slider').html(photoHTML);
				 Slider();
			}
		}); // end each    
		
    };

    $.getJSON("js/mscphotos.json", displayPhotos);


function Slider() {
	$('#image_slider li:first-of-type').show();

var currentIndex = 0,
  items = $('#image_slider li'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('#image_slider li').eq(currentIndex);
  items.fadeOut(0);
  item.fadeIn(1000);
}



$('#next').click(function() {

  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('#prev').click(function() {

  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});

};



    
}); // end ready
