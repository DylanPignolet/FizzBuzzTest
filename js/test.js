function fizzBizz () {
    let i;
    let number = document.getElementById("number");

    for (i = 1; i <= 100; i++) {


        if (i % 3 == 0 && i % 5 == 0)
        result = "FizzBuzz";

        else if (i % 3 == 0) 
        result = "Fizz";

        else if (i % 5 == 0) 
        result = "Buzz";


        else result = i;

        let numberDiv = document.createElement("div");
        numberDiv.append(result)
        numberDiv.setAttribute("class", result);
        numberDiv.classList.add("regular");
        number.appendChild(numberDiv);
        }
}

fizzBizz();