let first = document.getElementById("first");

let imgArray = new Array
(
    "assets/imgs/Asset20.png",
    "assets/imgs/Asset21.png",
    "assets/imgs/Asset22.png",
    "assets/imgs/Asset23.png",
    "assets/imgs/Asset24.png",
    "assets/imgs/Asset25.png",
    "assets/imgs/Asset26.png",
    "assets/imgs/Asset27.png"
)

let count = 0;
// function to cycle throug array
function animate () {
    first.src = imgArray[count];
    // increase count
    count++;
    // incre the count through the length
    if (imgArray.length == count){
    // reset and replay array
    count = 0;
    }


}

setInterval(animate, 100)





