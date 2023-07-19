$(document).ready(function(){
    $('.cardsx').html('<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>');
    let  url ='http://127.0.0.1:2525'
try {
$.getJSON({
    url: `${url}/`, 
    method: 'post',   
    success: function(data, status){
        if(status==='success'){

            let div = `
            <div style="
                display:flex;
                flex-direction: row;
                margin-top:15px;                
            ">

                <div style="
                    width:50%;
                    padding:10px;
                    margin-right:5px;
                    background:#fcc;
                ">
                    <img src="/img/taomlar.jpg" width="100%">
                    <button class="restoran" >Retoranlar</button>
                </div>

                <div style="width:50%;background:#fec;padding:10px;">
                    <img src="/img/food.jpg" width="100%">
                    <button class="dukon" >Do'konlar</button>
                </div>
            </div>
            <h3 style="text-align:center">Taomlar</h3>
           <div class="owl-carousel owl-theme">
                <div class="item">
                    <img src="img/photo_2023-07-01_08-04-47.jpg" class="animated">
                    <h2>title food1</h2>
                </div>
                
            </div>
            <h3 style="text-align:center">Ichimliklar</h3>
           <div class="owl-carousel owl-theme">
                <div class="item">
                    <img src="img/photo_2023-07-01_08-04-47.jpg" class="animated">
                    <h2>title food3</h2>
                </div>
                <div class="item">
                    <img src="img/photo_2023-07-01_08-04-47.jpg" class="animated">
                    <h2>title food4</h2>
                </div>
                <div class="item">
                    <img src="img/photo_2023-07-01_08-04-47.jpg" class="animated">
                    <h2>title food5</h2>
                </div>
                <div class="item">
                    <img src="img/photo_2023-07-01_08-04-47.jpg" class="animated">
                    <h2>title food6</h2>
                </div>
            </div>
            `
            $('.cardsx').html(div);
        }
        else{
            console.log("Server bilan aloqa yo'q")
        }
    },
    error: function() {
        console.log("Server bilan aloqa yo'q")
    }      
});
}
catch {
    console.log("Server bilan aloqa yo'q")
}

setTimeout(function(){
    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:3,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
},
2000);

});