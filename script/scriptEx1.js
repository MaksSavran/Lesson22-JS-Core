$(function () {
    let width, height, top, left;
    $('#container').on('click', function () {
        width = Math.round(Math.random() * 400);
        height = Math.round(Math.random() * 400);
        top = Math.round(Math.random() * 600);
        left = Math.round(Math.random() * 1000);
        
        $('#container').animate({
            width: width,
            height: height,
            top: top,
            left: left,
            backgroundColor: getRangomColor()
        }, 1500, 'easeOutBounce')
    });
});

function getRangomColor() {
    let randNum = Math.round(Math.random() * 16777215);
    let newNum = randNum.toString(16);
     while(newNum.length < 6){
        newNum = '0' + newNum;
    }
    return '#' + newNum;
}