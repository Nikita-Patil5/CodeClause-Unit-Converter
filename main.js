var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

//Meter Conversion
    if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.001
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
        result.value = input.value
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) *3.2808
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) *39.37007
    }
//Kilometer Conversion
    if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 3280.8399
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'inch'){
        result.value = Number(input.value) *39370.0787
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){
        result.value = input.value
    }
//Centimeter Conversion
    if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.00001
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.01
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) *0.0328084
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 0.39370079
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
        result.value = input.value
    }
//FOOT conversion
    if(inputTypeValue === 'foot' && resultTypeValue === 'foot'){
        result.value = input.value 
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'kilometer'){
        result.value =  Number(input.value) * 0.0003048
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value)* 30.48
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.3048
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 12
    }

//Inch Conversion
    if(inputTypeValue === 'inch' && resultTypeValue === 'inch'){
        result.value = input.value 
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'kilometer'){
        result.value =  Number(input.value) * 0.0000254
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) *2.54
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'meter'){
        result.value = Number(input.value) *0.0254
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 0.08333333
    }
//Grams Conversion
    if(inputTypeValue === 'grams' && resultTypeValue === 'kilogram'){
        result.value = Number(input.value) * 0.001
    } else if(inputTypeValue === 'grams' && resultTypeValue === 'grams'){
        result.value = input.value 
    } else if(inputTypeValue === 'grams' && resultTypeValue === 'pound'){
        result.value = Number(input.value)* 0.0022
    }

//Kilogram Conversion
    if(inputTypeValue === 'kilogram' && resultTypeValue === 'grams'){
        result.value = Number(input.value) * 1000
    } else if(inputTypeValue === 'kilogram' && resultTypeValue === 'kilogram'){
        result.value = input.value 
    } else if(inputTypeValue === 'kilogram' && resultTypeValue === 'pound'){
        result.value = Number(input.value) * 2.204
    }

//Pound Conversion
    if(inputTypeValue === 'pound' && resultTypeValue === 'kilogram'){
        result.value = Number(input.value) *0.45359
    } else if(inputTypeValue === 'pound' && resultTypeValue === 'grams'){
        result.value = Number(input.value) * 453.59
    } else if(inputTypeValue === 'pound' && resultTypeValue === 'pound'){
        result.value = input.value 
    }

//Celsius Conversion
    if(inputTypeValue === 'celsius' && resultTypeValue === 'fahrenheit'){
        result.value = (Number(input.value) * (9/5))+32
    } else if(inputTypeValue === 'celsius' && resultTypeValue === 'celsius'){
        result.value = input.value 
    }

//Fahrenheit
    if(inputTypeValue === 'fahrenheit' && resultTypeValue === 'celsius'){
        result.value = ((Number(input.value))-32)*5/9
    } else if(inputTypeValue === 'fahrenheit' && resultTypeValue === 'fahrenheit'){
        result.value = input.value 
    }




    

}
