/**
* Keep the footer stuck to the bottom of the page if the content is too short.
*
* Modified from Chris Coyer's post
* http://css-tricks.com/snippets/jquery/jquery-sticky-footer
*/(function(e){function t(){}t.prototype={stickyFooter:function(){var t=this;console.log("here");e(window).bind("load",function(){t.checkPos();e(window).scroll(t.checkPos).resize(t.checkPos)})},checkPos:function(){fh=this.outerHeight(!0);e(document.body).height()+fh<e(window).height()?this.stick():this.unstick()},stick:function(){this.addClass("stuck")},unstick:function(){this.removeClass("stuck")}};e.fn.stickyFooter=function(){var n=e(this);console.log("cp1");e.extend(!0,n,new t);n.stickyFooter()}})(jQuery);