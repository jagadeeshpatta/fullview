$.fn.fullview = function() {

    if(this.length){  

        this.each(function(){
            // Input image height, width and parent height and width
            var imageWidth = this.width,
                imageHeight = this.height,
                parentWidth = $(this).parent().width(),
                parentHeight = $(this).parent().height();
               
            // Caliclated aspect ratio and width and height differnce between container and image
            
            var aspectRatio = (imageHeight / imageWidth),
                widthDifferece = (parentWidth - imageWidth),
                heightDifference = (parentHeight - imageHeight);

            // Bseed on width differnce and height difference caliclate the value of image height and width
            
            if (widthDifferece < heightDifference) {
                $(this).css({width: (parentHeight * aspectRatio), height: parentHeight});
            } else {
                $(this).css({width: parentWidth, height: (parentWidth * aspectRatio)}); 
            }

            // New height and width of image

            var imageNewWdith = $(this).width(),
                imageNewHeight = $(this).height();

            // After increase the height and width cross check if the image is fit to the container or not
            // If not again recalculate the dimens
            // Caliclate the the new dimens if new height of image less than container height

            if(imageNewHeight < parentHeight){
                var heightDiff = (parentHeight - imageNewHeight),
                    currentWidth = $(this).width();
                $(this).css({height: parentHeight, width: (currentWidth + (heightDiff * (imageHeight/imageWidth)))});
            }

            // Caliclate the new dimens of image if new image width is less than container width
            
            if(imageNewWdith < parentWidth){
                var widthDiff = (parentWidth - imageNewWdith),
                    currentHeight = $(this).height();
                $(this).css({height: (currentHeight + (widthDiff * aspectRatio)), width: parentWidth});
            }
        });
    }
}