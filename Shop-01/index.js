$(document).ready(function(){
    let images=[
        '../Shop-01/image/qulaqliq1.webp', 
        '../Shop-01/image/qulaqliq2.webp', 
        '../Shop-01/image/qulaqliq3.webp', 
        '../Shop-01/image/qulaqliq4webp.png'
    ]
    let index=0

    setInterval(function() {
        $('.deyisenImg').css({
            'background-image': `url(${images[index]})`,
            'background-size': 'cover',
            'background-position': 'center'
        })
        
        
        index++;
        if (index === images.length) { 
            index = 0;
        }
    }, 3000);


    let birincisekil=localStorage.getItem('birincisekil')
    let ikincisekil=localStorage.getItem('ikincisekil')
    let ucuncusekil=localStorage.getItem('ucuncusekil')
    let dorduncusekil=localStorage.getItem('dorduncusekil')

    if(birincisekil){
        $('.mehsul-1').css({
            'background-image': `url(${birincisekil})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del2').css({
            display:'block'
        })
    }
    if(ikincisekil){
        $('.mehsul-2').css({
            'background-image': `url(${ikincisekil})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del3').css({
            display:'block'
        })
    }
    if(ucuncusekil){
        $('.mehsul-3').css({
            'background-image': `url(${ucuncusekil})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del4').css({
            display:'block'
        })
    }
    if(dorduncusekil){
        $('.mehsul-4').css({
            'background-image': `url(${dorduncusekil})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del5').css({
            display:'block'
        })
    }


    $('.sebet').click(function(){
        $('.qutum').css({
            display:'block'
        })
        $('.bi-x-circle').click(function(){
            $('.qutum').css({
                display:'none'
            })
        })
    })

    $('.im-01').click(function(){
        let image1='../Shop-01/image/qulaqliq1.webp'
        localStorage.setItem('birincisekil', image1)
        $('.mehsul-1').css({
            'background-image': `url(${image1})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del2').css({
            display:'block'
        })
    })

    $('.im-02').click(function(){
        let image2='../Shop-01/image/qulaqliq2.webp'
        localStorage.setItem('ikincisekil', image2)
        $('.mehsul-2').css({
            'background-image': `url(${image2})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del3').css({
            display:'block'
        })
    })

    $('.im-03').click(function(){
        let image3='../Shop-01/image/qulaqliq3.webp'
        localStorage.setItem('ucuncusekil', image3)
        $('.mehsul-3').css({
            'background-image': `url(${image3})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del4').css({
            display:'block'
        })
    })

    $('.im-04').click(function(){
        let image4='../Shop-01/image/qulaqliq4webp.png'
        localStorage.setItem('dorduncusekil', image4)
        $('.mehsul-4').css({
            'background-image': `url(${image4})`,
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.3)',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.del5').css({
            display:'block'
        })
    })

    $('.del2').click(function() {
        localStorage.removeItem('birincisekil')
        $('.mehsul-1').css({
            'background-image': 'none'
        })
        $(this).css({
            display: 'none'
        })
    })

    $('.del3').click(function() {
        localStorage.removeItem('ikincisekil')
        $('.mehsul-2').css({
            'background-image': 'none'
        })
        $(this).css({
            display: 'none'
        })
    })

    $('.del4').click(function() {
        localStorage.removeItem('ucuncusekil')
        $('.mehsul-3').css({
            'background-image': 'none'
        })
        $(this).css({
            display: 'none'
        })
    })

    $('.del5').click(function() {
        localStorage.removeItem('dorduncusekil')
        $('.mehsul-4').css({
            'background-image': 'none'
        })
        $(this).css({
            display: 'none'
        })
    })

    $('.bi-list').click(function(){
        $('nav').css({
            display: 'block',           
            position: 'fixed',       
            top: '10%',
            left: '0',
            width: '100%', 
            height: '9%',              
            backgroundColor: '#333',    
            color: 'white',          
            padding: '20px' 
        })
        $('ul').css({
            width:'260px',
            position: 'fixed',
            top: '13%',
            left: '25%',
        })
        $('.bi-list').hide()

        $('.bi-x-square-fill').css({
            display:'block'
        })
    })
    $('.bi-x-square-fill').click(function(){
        $('.bi-list').show()
        $('.bi-x-square-fill').hide()
        $('nav').hide()
    })
    
    
})