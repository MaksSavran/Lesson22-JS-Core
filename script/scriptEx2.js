$(function () {
    
    let width, height, top, left;
    let colors = {
        backgroundRed: 0, 
        backgroundGreen: 0, 
        backgroundBlue: 0,
        borderRed: 0, 
        borderGreen: 0, 
        borderBlue: 0,
        shadowRed: 0, 
        shadowGreen: 0, 
        shadowBlue: 0
    };

    setInterval(function () {
        console.log('lol');
        width = Math.round(Math.random() * 400);
            height = Math.round(Math.random() * 400);
            top = Math.round(Math.random() * 600);
            left = Math.round(Math.random() * 1300);
            Object.keys(colors).forEach(randomColor =>{
                colors[randomColor] = Math.round(Math.random() * 255);
            });
            
        $('#discoBall').animate({
            //width: width,
            //height: height,
            top: top,
            left: left,
            backgroundColor: `rgb(${colors.backgroundRed},${colors.backgroundGreen},${colors.backgroundBlue})`,
            borderColor: `rgb(${colors.borderRed},${colors.borderGreen},${colors.borderBlue})`,
            boxShadow: `2px 3px 20px rgb(${colors.shadowRed},${colors.shadowGreen},${colors.shadowBlue})`
        }, 1000, 'easeInOutCirc')
    });
})