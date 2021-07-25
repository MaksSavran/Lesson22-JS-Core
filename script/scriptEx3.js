$(function () {

    let currentElement;
    let currentElementBackgroundColor;
    let currentElementOffset;

    $('.box').each(function (id, elem) {
        $(elem).on('click', function () {
            let top = ((window.innerHeight - 500) / 2);
            let left = ((window.innerWidth - 500) / 2);
            currentElement = $(elem);            
            currentElementBackgroundColor = $(elem).css('background-color');
            currentElementOffset = $(elem).offset();

            $(elem).css('background-color', 'white');
            $('.previewBox').css({
                top: currentElementOffset.top,
                left: currentElementOffset.left,
                backgroundColor: currentElementBackgroundColor,
                position: 'absolute',
            });

            $('.previewBox').show();
            $('.darkBackground').fadeIn(1000, 'easeOutBack');
            $('.previewBox').animate({
                width: '500px',
                height: '500px',
                top: top,
                left: left
            }, 1000, 'easeOutBack')
        });
    });
    
    $('.previewBox').on('click', function () {
        $('.darkBackground').fadeOut(1000, 'easeInBack');
        $('.previewBox').animate({
            width: '150px',
            height: '150px',
            top: currentElementOffset.top,
            left: currentElementOffset.left
        }, 1000, 'easeInBack', () => {
            $('.previewBox').hide();
            currentElement.css('background-color', currentElementBackgroundColor);
        });
    })
});
