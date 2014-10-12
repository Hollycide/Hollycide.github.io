var wessels = 0;

function wesselClick(number){
    wessels = wessels + number;
    document.getElementById("wessels").innerHTML = wessels;
};

var razors = 0;

function buyRazor(){
    var razorCost = Math.floor(10 * Math.pow(1.1,razors));       //works out the cost of this cursor
    if(wessels >= razorCost){                                   //checks that the player can afford the cursor
        razors = razors + 1;                                   //increases number of cursors
    	wessels = wessels - razorCost;                          //removes the cookies spent
        document.getElementById('razors').innerHTML = razors;  //updates the number of cursors for the user
        document.getElementById('wessels').innerHTML = wessels;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,razors));       //works out the cost of the next cursor
    document.getElementById('razorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	wesselClick(razors);
	
}, 1000);