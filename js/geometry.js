document.getElementById('tringle-calc-btn').addEventListener('click', function () {
    const tringleNameElement = document.getElementById('tringle-name');
    const tringleName = tringleNameElement.innerText;

    const tringleBaseValue = getInputValue('tringle-Base-field')
    const tringleHeightValue = getInputValue('tringle-height-field')

    const tringleResult = 0.5 * tringleBaseValue * tringleHeightValue;
    
    setResult(tringleName, tringleResult)
})