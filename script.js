function name(name) {
  document.getElementById("wojewodztwo").innerHTML = name;
  }

document.onscroll=function() {
  var ile=window.pageYOffset;
	if(ile>=document.getElementById("body").offsetTop)
		{
		document.getElementById("header").style.position='fixed';
		document.getElementById("poland_map").style.display="block";
		}
	else
		{
		document.getElementById("header").style.position='relative';
		document.getElementById("poland_map").style.display="none";
		}
  }
	document.getElementById('dogory').onclick=function()
	{
		window.scrollTo(0,0);
  }

  $(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#dogory').fadeIn();
        } else {
            $('#dogory').fadeOut();
        }
    });

    $('dogory').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

})