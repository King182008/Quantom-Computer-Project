const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})

$("#progress-button1").click(function(){
    $("#progress").animate({width: "10%"}, "slow")
    $("#progress").animate({width: "100%"}, "slow")
})

$("#progress-button2").click(function(){
    $("#progress2").animate({width: "5%"}, "slow", function(){
        $("#progress2").animate({width: "10%"}, "slow")
        $("#progress2").animate({width: "20%"}, "fast", function(){
            $("#progress2").animate({width: "50%"}, "slow")
                $("#progress2").animate({width: "52%"}, "slow", function(){
                    $("#progress2").animate({width: "55%"}, "slow")
                    $("#progress2").animate({width: "75%"}, "slow", function(){
                        $("#progress2").animate({width: "85%"}, "slow")
                        $("#progress2").animate({width: "95%"}, "slow")
                        $("#progress2").animate({width: "100%"}, "slow")
                    })
                })
        })
    })
})
