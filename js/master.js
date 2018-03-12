(function($) {

	 "use strict";

	 $(document).ready(function(){

		 function dataRequest(elem) {
			 //Activate tabs
			 if (!elem.hasClass('active')) {
				 elem.addClass('active').siblings().removeClass('active');
			 }

			 //Check the content is loaded or not
			 var contentBlock = elem.next('.content-block');
			 var insideContent = contentBlock.find('.subtitle');

			 if (!insideContent.length) {
				 //Get the elem ID for the exact content inside the JSON
				 var elemID = elem.attr('id');

				 //Request to get the data for the content
				 $.ajax({
					 type: 'GET',
					 url: 'data/content.json',
					 success: function(data) {
						 $.each(data, function(index, element) {
							 if(element.id === elemID) {
								 elem.next('.content-block').append('<p class="subtitle">'+element.subtitle+'</p>'+element.content);
							 }
						 });
					 }
				 });
			 }
		 }

		 var title = $('.tab');
		 title.click(function(e){
			 var $self = $(this);
			 dataRequest($self);
		 });

	 });

})(jQuery);
