
    const name = 'name';
    let message = `My name is: ${name}`;
    console.log(message);

    let cost = 1*5 + 2*3 + 1*9;
    console.log(cost);

    message = `Cost of food: $${cost}`;
    console.log(message);  

    cost = 1*10 + 3*8 + 1*3;
    console.log(cost);

    cost = (1*10 + 3*8 + 1*3) *3;
    console.log (cost);

    cost = 18.50 + 2*7.50;
    console.log(cost);

    cost = (18.50 + 2*7.50) *0.1;
    console.log(cost);

    cost = (18.50 + 2*7.50) *0.2;
    console.log(cost);
     
     cost = (1850 + 2*750) /100
     console.log(cost);

     cost = ((1850 + 2*750) /100) *0.2
     console.log(cost);

     cost = ((1*2095 + 1*799 + 1*1899) /100);
     console.log(cost);

     cost = ((1*2095 + 1*799 + 1*1899 + 499) /100);
     console.log(cost);

     cost = (1*2095 + 1*799 + 1*1899 + 499) /100;
     console.log(cost);

     cost = Math.round((1*2095 + 1*799 + 1*1899 + 499) *0.1) /100 ;
     console.log(cost);

     //type concatenation
     cost = '$' + (2095 + 799) /100;
     console.log (cost);

     cost = "Items (" + (1+1) + '):\n  ' + '$' + (2095 + 799) /100;
    // console.log (alert (cost));

    //interpolation
    cost = `Items (${1 + 1}):\n  $${(2095 + 799) / 100}`;
console.log(cost);


    cost = `Items (${1+1}): $${(2095 + 799) /100}`;
    console.log(cost);

    message = 'My name is Name';
    console.log(message);

    message = 'My name is Name';
    //console.log(alert(message));

    const age = 100;
    message = `I am ${100} years old`;
    console.log(message);