// Get the Input Value
function getInputValue(elementId){
    const userInputElement = document.getElementById(elementId);
    const userInputString = userInputElement.value;
    const userInputValue = parseFloat(userInputString);

    userInputElement.value = ''
    return userInputValue
}

// Set the result in calcaulation area
function setResult(resultItemName, finalResult){
    const resultFieldContainer = document.getElementById('result-field-container');

    let btn = document.createElement("button");
    btn.innerHTML = 'Covert to m' + '2'.sup();

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${1}</td>
        <td>${resultItemName}</td>
        <td>${finalResult}</td>
        <td>${btn.innerHTML}</td>
    `
    resultFieldContainer.appendChild(tr)
}