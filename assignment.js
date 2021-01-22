//1.kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (typeof kilometer == 'number') //You Can insert only numbers.
    {
        return meter;
    } else {
        return "Please Insert Number";
    }
}
/*var convertToMeter = kilometerToMeter(10);
console.log(convertToMeter);*/




//2.budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    var totalItemCost = watchTotal + phoneTotal + laptopTotal;
    if ((watch >= 0 && typeof watch == 'number' && watch % 1 == 0) && (phone >= 0 && typeof phone == 'number' && phone % 1 == 0) && (laptop >= 0 && typeof laptop == 'number' && laptop % 1 == 0)) //Can not use negetive,float numbers and latter
    {
        return totalItemCost;
    }
    else {
        return "'Error' Please Check Your Insertion, Use Only Integer Numbers : ";
    }
}
/*var totalItem = budgetCalculator(1,1,1); //use only integer numbers.
console.log(totalItem)*/




//3.hotelCost
function hotelCost(day) {
    var cost = 0;
    if (day % 1 !== 0)     //Day can not be float.
    {
        return "'Error' Input Valid Day : ";
    }
    else if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var first10DaysRent = 10 * 100;   //First 10 days cost per day 100 taka.
        var spending = day - 10;
        var secound10DaysRent = spending * 80; //Secound 10 days cost per day 80 taka + spending previous 10 days cost.
        cost = first10DaysRent + secound10DaysRent;
    }
    else {
        var first10DaysRent = 10 * 100;
        var secound10DaysRent = 10 * 80;
        var spending = day - 20;
        var thirdDaysRent = spending * 50; //Before spending 20 days hotel rent cost is 50 +previews spending days.
        cost = first10DaysRent + secound10DaysRent + thirdDaysRent;
    }
    return cost;
}
/*var totalHotelCost = hotelCost(21); //Use only integer type value
console.log(totalHotelCost);*/




// 4.megaFriend
var friends = ["Arman", "Ighbal", "Imran", "Shakibul", "Rakibul"];
function megaFriend(arr) {
    var long1 = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > long1.length) //initialize long1 as empty string and use long1.length for comparison
        {
            long1 = arr[i];     //compare with length which is integer value
        }
    }
    return long1;
}
  //console.log(megaFriend(friends));