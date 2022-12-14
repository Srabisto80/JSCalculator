







$(document).ready(function () {
    var final = null;
    var answer = 0;
    var answer2 = 0;
    var numberArray = [];
    var operatorArray = [];

    $('#display').text(answer2);

    $('.btnN').click(function(event) {
        if (answer === 0) {
            answer = event.target.value
            answer2 = event.target.value
            $('#display').text(answer2);
        } else {
            answer += (event.target.value)
            answer2 += (event.target.value)
            $('#display').text(answer2);
        }
    })


    $('.btnZero').click(function(event) {
        if (event.target.value == '0') {
            if (answer2 == '0') {
                $('#display').text(answer2);
            } else {
                answer += event.target.value
                answer2 += event.target.value
                $('#display').text(answer2);
            }
        }
    })

    
    $('#decimal').click(function() {
        //can't put two decimals next to eachother
        var lookForDecimal = /[.]/;
        var decimal = lookForDecimal.test(answer);
        //look for decimal already in number
     
        if (decimal == false) {
            answer += '.'
            answer2 += '.'
            $('#display').text(answer2);
        }
    })


    $('.btnS').click(function(event) {
        // console.log(document.getElementById('#display').text)
        // console.log(answer)
        var lookForDigits = /\d$/;
        var lookFor = lookForDigits.test(answer)
        if (lookFor) {
            console.log('normal')
            numberArray.push(answer) //puts number into number Array
            // console.log(numberArray)
            operatorArray.push(event.target.value) //puts operator into operator Array
            // console.log(operatorArray)
            answer2 += event.target.value;
            answer = "";
            // console.log(answer)
            // console.log(answer2)
            $('#display').text(answer2);
        } else {
            var minuiae2 = /[+/*-]{2,}$/
            var checkMinus2 = minuiae2.test(answer2)
            console.log(checkMinus2)

            if (checkMinus2) {
                operatorArray.pop()
                operatorArray.pop()
                operatorArray.push(event.target.value)
                answer2 = answer2.slice(0, answer2.length-2)
                answer2 += event.target.value;
                answer = "";
                $('#display').text(answer2)
            } else { 
                if (event.target.value == '-') {
                    console.log('add minus')
                    answer += "-";
                    answer2 += "-";
                    $('#display').text(answer2);
                } else {
                    console.log('dont add minus')
                    operatorArray.pop()
                    operatorArray.push(event.target.value)
                    answer2 = answer2.slice(0, answer2.length-1)
                    answer2 += event.target.value;
                    $('#display').text(answer2);
                }
            }





            // // console.log(answer2, 'else')
            // // console.log(answer2)
            // var minuiae = /[-+]{1}/
            // var checkMinus = minuiae.test(answer2)
            // // console.log(checkMinus)
            // if (checkMinus){
            //     console.log('yes1', answer2)
            //     if (event.target.value == "-") {

            //     } else {
             
            //     }
            // }
            // if (checkMinus2) {
            //     console.log('yes2', answer2)

            //     $('#display').text(answer2)
            // }
        }
    })


    $('#equals').click(function() {
        console.log(numberArray, operatorArray)
        operatorArray.pop() //take off equals out of array
       
        do {
            val = operatorArray[0]
        switch (val) {
            case '+':
                final = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
                break;
            case '-':
                final = parseFloat(numberArray[0]) - parseFloat(numberArray[1]);
                break;
            case '*':
                final = parseFloat(numberArray[0]) * parseFloat(numberArray[1]);
                break;
            case '/':
                final = parseFloat(numberArray[0]) / parseFloat(numberArray[1]);
                break;
            case '^':
                final = parseFloat(numberArray[0])**parseFloat(numberArray[1]);
                break;
            case '.':
                final = numberArray[0] + "." + numberArray[1];  
                break;
        }
        numberArray.splice(0,2)
        numberArray.unshift(final)
        operatorArray.shift()
        // // console.log(final)
        answer2 = final
        answer = final
      
        } while (numberArray.length > 1)
        $('#display').text(answer2)
        numberArray = [];
        console.log(numberArray, operatorArray)
    }
    )



    $('.btnClear').click(function(event){

        if (event.target.value == 'clear') {
            final = null;
            answer = 0;
            answer2 = 0;
            numberArray = [];
            operatorArray = [];
            $('#display').text(answer2)
        }

        $('#display').text(answer2);
    })

})
















// $(document).ready(function () {
//     var answer = 0;
//     var final = null;
//     // $('#display').empty();

//     $('#display').text(answer)
//     var lookFor;
//     var final;
//     var numberArray = [];
//     var operatorArray = [];
//     var d;
//     var numbers;
//     var operators;
//     var firstNum;
// console.log(answer)
//     // $('#zero').click(function() {
//     //     if ((answer[0] != 0 && answer[0] != "") || answer.length>1) {
//     //         $('#display').append('0');
//     //         answer += '0';
//     //     } else {
//     //         $('#display').append('');
//     //     }
//     // })

    // $('.btn').click(function(event) {

    //     // answer = document.getElementById('#display')
    //     if (answer === 0) {
    //         answer = event.target.value
    //         $('#display').text(answer);
    //     } else {
            
    //         answer += (event.target.value)
    //         console.log(answer)
    //         $('#display').append(event.target.value);
    //     }
    // })

    // $('.btnS').click(function(event) {
    //     // console.log(answer[answer.length-1])
    //     var lookForDigits = /\d$/;
    //     var lookFor = lookForDigits.test(answer)
    //     // var lookFor = (answer[answer.length-1]).match(lookForDigits)
    //     // console.log(lookFor)
    //     if (lookFor) {
    //         // console.log('yes')
    //         numberArray.push(answer) //puts number into number Array
    //         console.log(numberArray)
    //         operatorArray.push(event.target.value) //puts operator into operator Array
    //         console.log(operatorArray)
    //         $('#display').append(event.target.value);
    //         // answer += (event.target.value)
    //         answer = "";

    //     } else {
    //         if (event.target.value == "-") {
    //             $('#display').append(event.target.value);

    //         }else {
    //         // console.log('no')
    //         $('#display').append("");
    //     }}
    //     // console.log(answer)
    // })



//     // $('#negative').click(function(){
//     //     // console.log(answer[0])
//     //     if (answer[0] != '-') {
//     //         // console.log('yes')
//     //         $('#display').prepend('-')
//     //         answer = '-' + answer;
//     //     } else {
//     //         // console.log('no')
//     //         // $('#display').prepend('');
//     //         answer[0] = ' ';
//     //     }
//     //     // console.log(answer)
//     // })

    // $('#decimal').click(function() {
    //     // console.log(answer)
    //     //can't put two decimals next to eachother
    //     var lookForDecimal = /[.]$/;
    //     // console.log(lookForDecimal)
    //     var decimal = lookForDecimal.test(answer);
    //     if (decimal == false) {
    //         $('#display').append(".");
    //         answer += '.'
    //     }

    //     console.log(answer)
    // })

    // $('#equals').click(function() {
    //     // var isDecimal = /\d+[.]\d+/g;
    //     // var makeDecimal = answer.match(isDecimal)
    //     // console.log(parseFloat(makeDecimal))

    //     // var numbers = answer.split(/[+-/*^=]/g)
    //     // console.log(numbers)
    //     // console.log(answer)
    //     // var operators = answer.split(/\d+/g)
    //     // // console.log(operators)
    //     // if (numbers[0] == "") {
    //     //     console.log('negative')
    //     //     var firstNum = numbers[1] - (numbers[1]*2)
    //     //     console.log(firstNum)
    //     //     numbers.splice(0,2)
    //     //     numbers.pop()
    //     //     numbers.unshift(firstNum)
    //     //     // console.log(numbers)
    //     // } else {
    //     //     numbers.pop()
    //     //     // console.log(numbers)
    //     // }
    //     // if (numbers.length != operators.length) {
    //     //     // console.log('getridofnegative')
    //     //     operators.shift();
    //     // }
    //     // // console.log(operators)
    //     // var val;
    //     // var final;
    //     operatorArray.pop() //take off equals out of array
       
    //     do {
    //         val = operatorArray[0]
    //     switch (val) {
    //         case '+':
    //             final = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
    //             break;
    //         case '-':
    //             final = parseFloat(numberArray[0]) - parseFloat(numberArray[1]);
    //             break;
    //         case '*':
    //             final = parseFloat(numberArray[0]) * parseFloat(numberArray[1]);
    //             break;
    //         case '/':
    //             final = parseFloat(numberArray[0]) / parseFloat(numberArray[1]);
    //             break;
    //         case '^':
    //             final = parseFloat(numberArray[0])**parseFloat(numberArray[1]);
    //             break;
    //         case '.':
    //             final = numberArray[0] + "." + numberArray[1];  
    //             break;
    //     }
    //     numberArray.splice(0,2)
    //     numberArray.unshift(final)
    //     operatorArray.shift()
    //     // // console.log(final)
    //     answer = final
      
    //     } while (numberArray.length > 1)
    //     $('#display').text(answer)
    //     numberArray = [];
    //     console.log(numberArray, operatorArray)
    // }
    // )



//     // $('#clear').click(function() {
//     //     final = null;
//     //     answer = 0;
//     //     numberArray = [];
//     //     operatorArray = [];
//     //     $('#display').text(answer);
//     //     // $('#display').text(value)
//     //     // $('#display').text('0');
//     // })


    
//     })



// $(document).ready(function () {

//     $('.btn').click(function(event) {
// console.log(event.target.value)

//         if (event.target.value == 'clear') {
//             final = null;
//             answer = 0;
//             numberArray = [];
//             operatorArray = [];
//             $('#display').text(answer)
//         }

//         if (event.target.value == '0') {
//             // console.log(answer)
//             if (answer[0] != 0 && answer[0] != "" || answer.length>1) {
//                 $('#display').append('0');
//                 answer += '0';
//             } else {
//                 $('#display').append('');
//             }
//         }

//         if (event.target.value != 0 && answer == 0) {
//             answer = event.target.value
//             $('#display').text(answer);
//         } else {
//             answer += (event.target.value)
//             console.log(answer)
//             $('#display').append(event.target.value);
//         }






//     $('#display').text(answer);


//     })


// })

















//     // $('#one').click(function(){
//     //     $('#display').append('1')
//     // })
//     // $('#two').click(function(){
//     //     $('#display').append('2')
//     // })
//     // $('#three').click(function(){
//     //     $('#display').append('3')
//     // })
//     // $('#four').click(function(){
//     //     $('#display').append('4')
//     // })
//     // $('#five').click(function(){
//     //     $('#display').append('5')
//     // })
//     // $('#six').click(function(){
//     //     $('#display').append('6')
//     // })
//     // $('#seven').click(function(){
//     //     $('#display').append('7')
//     // })
//     // $('#eight').click(function(){
//     //     $('#display').append('8')
//     // })
//     // $('#nine').click(function(){
//     //     $('#display').append('9')
//     // })
//     // $('#zero').click(function(){
//     //     $('#display').append('0')
//     // })
//     // $('#plus').click(function(){
//     //     $('#display').append('+')
//     // })
//     // $('#minus').click(function(){
//     //     $('#display').append('-')
//     // })
//     // $('#decimal').click(function(){
//     //     $('#display').append('.')
//     // })
//     // $('#product').click(function(){
//     //     $('#display').append('*')
//     // })
//     // $('#quotient').click(function(){
//     //     $('#display').append('/')
//     // })
//     // $('#exponent').click(function(){
//     //     $('#display').append('^')
//     // })
//     // console.log(document.getElementById('#display'))
 

//     // $('equals').click(function() {
//     //     let problem = document.getElementById('#display')
//     //     let regex = /\D/g;
//     // })
// // let buttons = document.getElementsByClassName('btn');
// // buttons = [...buttons];
// // buttons.forEach(buttonn);
// //     $("button").click(function(buttonn) {
       
// //         $('#display').html(buttons.value);
// //     })





































