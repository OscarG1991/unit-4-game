var myReload = {
targetNumber: Math.floor(Math.random() * 120) + 19,
counter: 0
}
 $("#number-to-guess").text(myReload.targetNumber);
 var wins = 0;
 var losses = 0;

 
 var j = 0;
 var arr = [10, 5, 8, 3];
 for (var i = 0; i< arr.length; i++){
 var gemImage = $('<div class="col-md-3 gem"> <img src="assets/images/gem' + j++ + '.png" data-value=' + arr[i] + ' /></div>')
 $(".gem-wrapper").append(gemImage);
   function shuffle(arr) {
    for (let k = arr.length - 1; k > 0; k--) {
        const l = Math.floor(Math.random() * (k + 1));
        [arr[k], arr[l]] = [arr[l], arr[k]];
    }
    return arr;
}
 }




$(".gem img").on("click", function(){
    console.log($(this).attr("data-value"));
    var gemValue = $(this).attr("data-value");
    gemValue = parseInt(gemValue);
    myReload.counter += gemValue;
    $(".counter").text("Your Count: " + myReload.counter);
    if (myReload.counter === myReload.targetNumber) {
        wins++;
        shuffle(arr);
        $(".wins").text("Your Wins: " + wins);
        myReload.targetNumber = Math.floor(Math.random() * 120) + 19;
        myReload.counter = 0;
        $("#number-to-guess").text(myReload.targetNumber);
        $(".counter").text("Your Count: " + myReload.counter);
        console.log(myReload);
        alert("You Win!")     
    }
    else if (myReload.counter > myReload.targetNumber){
        losses++;
        shuffle(arr);
        $(".losses").text("Your Losses: " + losses);
        myReload.targetNumber = Math.floor(Math.random() * 120) + 19;
        myReload.counter = 0;
        $("#number-to-guess").text(myReload.targetNumber);
        $(".counter").text("Your Count: " + myReload.counter);
        console.log(myReload);
        alert ("You lose!");
        }

})

