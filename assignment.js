// github rep...link = https://github.com/rayhanwd/assignment.js


//Kilometer To Metter conversation

function kilometerToMeter(kilometer){

    var lengthConverter = kilometer*1000;

    if(kilometer < 0){
        
        console.log('unexpected! negative value.please type positive value,example: 20');
    }
 
    else{
       
        return lengthConverter;
    }
    
}

 var result = kilometerToMeter(22);  // optional: input your tottal kilometer here

 console.log(result);  //optional: totall metter is here

//budgetCalculator conversation

function budgetCalculator(watch,phone,laptop){

    var watchprice = watch*50;

    var phoneprice = phone*100;

    var laptopprice = laptop*500;

    var tottalCost = watchprice+phoneprice+laptopprice;

    if(watch < 0 || phone < 0 || laptop < 0){

        console.log('unexpected! negative value.please type positive value,example: 2,3,4');
    }

    else{

        return tottalCost;
    }
    
}

 var result = budgetCalculator(2,0,0); // input your tottal items in separate (,)

 console.log(result);

//hotel cost conversation with js function

function hotelCost(day) {

    var discout = 100 - (100 *0/100);

    var tottalCost= discout*day;

    if(day<0){

        console.log('unexpected! negative value.please type positive value,example: 2,3,4,6,11,22');
    }
    else if(day>10 && day<19){

        var discout = 100 - (100*3/100);

        var tottalCost= discout*day;

        return tottalCost;
    }
  else  if(day>20 && day<29){

        var discout = 100 - (100*5/100);

        var tottalCost= discout*day;

        return tottalCost;
    }
    else  if(day>30 && day<39){

        var discout = 100 - (100*7/100);

        var tottalCost= discout*day;

        return tottalCost;
    }
    else  if(day>40 && day<49){

        var discout = 100 - (100*9/100);

        var tottalCost= discout*day;

        return tottalCost;
    }
    else  if(day>50 && day<59){

        var discout = 100 - (100*11/100);

        var tottalCost= discout*day;

        return tottalCost;
    }
    else  if(day>70 && day<79){

        var discout = 100 - (100*15/100);

        var tottalCost= discout*day;

        return tottalCost;
    }
    else  if(day>79 && day>89){

        var discout = 100 - (100*17/100);

        var tottalCost= discout*day;

        return tottalCost;
    }
    else{
        return tottalCost;
    }
   
}

 var netCost= hotelCost(120); // optional: input your tottal hotel day

 console.log(netCost); // optional: tottal days cost is here


//Mega Friend conversation with Js 

function megaFriend(friend){
     
      var megaCount = 0;

      for (var i = 0; i < friends.length; i++) {

        if (friends[i].length > megaCount) {

          var megaCount = friends[i].length;

          friend = friends[i];
        }
      }
         return friend;
    }
    var friends = ['sohan','imran','manik','abdullah','rakibul']; // input a arry here

    var megaFriends = megaFriend(friends); // optional: call function in a variable
    
    console.log(megaFriends);  // optional: megafriend is here