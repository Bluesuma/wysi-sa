jQuery.extend( jQuery.suitUp.commands, {
	createlink: function( callback ){
		callback( window.prompt( 'This only creates link, to remove link use native "unlink" command or custom "link" command \nURL:', '' ) );
	},
	forecolor: 'red',
	insertimage: function( callback ){
		callback( window.prompt( 'URL:', '' ) );
	}
});
jQuery.extend( jQuery.suitUp.commands, {
	hideout: function( callback ){
		callback();
	},
	forecolor: 'red',
	insertimage: function( callback ){	
		callback( window.prompt( 'URL:', '' ) );
	}
});

jQuery.extend( jQuery.suitUp.custom, {
	link: function( textarea, suitUpBlock ) {
		return jQuery( '<a/>' ).prop({
			className: 'suitup-control',
			href: '#'
		}).attr({
			'data-command': 'createlink' // adding same style as for createlink command button
		}).on( 'click', function() {
			if( !$.suitUp.hasSelectedNodeParent( 'a' ) ) {
				document.execCommand( 'createlink', false, window.prompt( 'This is custom "link" command \nURL:', '' ) );
			} else {
				document.execCommand( 'unlink', false, null );
			}
			
			textarea.value = $( suitUpBlock ).find( '.suitup-editor' ).html();
		});			
	},
	
	CallbackTest: function() {
		return $( '<span/>', {
			'class': 'suitup-control'
		}).css( 'backgroundColor', 'red' ).on( 'click', function() {
			alert( 'Test_callback' );
		});
	},
	hideshow: function(){
		return $("#show-hide").click(function(){
		  $("#output").toggle();
		});
	}
});
$(document).ready(function(){
	$("#show-hide").click(function(){
	  $("#output").toggle();
	});
  });

jQuery.suitUp.controls = [ 
	'createlink',
	'justifycenter',
	'justifyfull',
	'justifyright',
	'justifyleft',
	'bold',
	'forecolor',
	'formatblock#<h1>',
	'formatblock#<h2>',
	'formatblock#<h3>',
	'formatblock#<h4>',
	'formatblock#<h5>',
	'formatblock#<h6>',
	'formatblock#<p>',
	'italic',
	'insertorderedlist',
	'insertunorderedlist',
	'strikethrough',
	'subscript',
	'superscript',
	'underline',
	'insertimage',
	'fontname'	
];
	function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}