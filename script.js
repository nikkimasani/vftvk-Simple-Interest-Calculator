function compute()
{
    // retrieve the value of the principal element and validate
    // the value should be positive and not empty.
    var principalObj = document.getElementById("principal");
    var principal = principalObj.value;
    if(principal <= 0)
    {
        alert("Enter a positive number.");
        principalObj.focus();
        return;
    }

    // retrieve the value of the rate range element. no validation
    // is needed as it is marked required and the values are bounded
    var rate = document.getElementById("rate").value;

    // retrieve the value of years element. no validation is needed as
    // it is bounded by the options given.
    var years = document.getElementById("years").value;

    // perform computations
    var interest = principal * years * rate / 100.0;
    var year = new Date().getFullYear() + parseInt(years);

    // generate the text presenting the results of the computation.
    var out = 'If you deposit <span class="hitext">' + principal + '</span>,<br/>'
        + 'at an interest rate of <span class="hitext">' + rate + '%</span>.<br/>'
        + 'You will receive an amount of <span class="hitext">' + interest + '</span>,<br/>'
        + 'in the year <span class="hitext">' + year + '</span><br/>';
    document.getElementById("result").innerHTML = out;
        
}

function updateRate()
{
    // updates the display value of interest rate whenever the range onchanged
    // event is triggered.
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
