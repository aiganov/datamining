jQuery(document).ready(function(){
	jQuery('.spoiler-content').hide()
	jQuery('.spoiler').click(function(){
		jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
	})
})