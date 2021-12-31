$('.SeeMore').click(function(){ /* function lets you see more or less text .. hope it works on all browsers :p i should move this to another folder*/
        var $this = $(this);
        $this.toggleClass('SeeMore2');
        if($this.hasClass('SeeMore2')){
            $this.text('See More');         
        } else {
            $this.text('See Less');
        }
    });
