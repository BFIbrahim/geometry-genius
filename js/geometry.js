// Card one Completed
document.getElementById('tringle-calc-btn').addEventListener('click', function () {
    // const tringleNameElement = document.getElementById('tringle-name');
    // const tringleName = tringleNameElement.innerText;
    const tringleName = getElementName('tringle-name')

    const tringleBaseValue = getInputValue('tringle-Base-field')
    const tringleHeightValue = getInputValue('tringle-height-field')

    const tringleResult = 0.5 * tringleBaseValue * tringleHeightValue;

    const tringleBase = document.getElementById('tringle-base-value');
    const tringleHeight = document.getElementById('tringle-height-value')
    tringleBase.innerText = tringleBaseValue
    tringleHeight.innerText = tringleHeightValue;

    
    setResult(tringleName, tringleResult)
})

// card Two Completed
document.getElementById('rectangle-btn-calc').addEventListener('click', function(){
    const rectangleName = getElementName('rectangle-Name');

    const rectangleWidthValue = getInputValue('rectangle-W-field');
    const rectangleHeightValue = getInputValue('rectangle-l-field');

    const rectangleResult = rectangleWidthValue * rectangleHeightValue;

    const rectangleWidth = document.getElementById('rectangle-w-value')
    const rectangleHidth = document.getElementById('rectangle-h-value')
    rectangleWidth.innerText = rectangleWidthValue;
    rectangleHidth.innerText = rectangleHeightValue

    setResult(rectangleName, rectangleResult)

})

// Card Three Completed
document.getElementById('parallelogram-btn-calc').addEventListener('click', function(){
    const parallelogramName = getElementName('parallelogram-name');
    
    const parallelogramBaseValue = getInputValue('parallelogram-base-field')
    const parallelogramHightValue = getInputValue('parallelogram-height-field')

    const parallelogramResult = parallelogramBaseValue * parallelogramHightValue;

    const parallelogramBase = document.getElementById('parallelogram-b-value')
    const parallelogramHeight = document.getElementById('parallelogram-h-value')
    parallelogramBase.innerText = parallelogramBaseValue;
    parallelogramHeight.innerText = parallelogramHightValue;

    setResult(parallelogramName, parallelogramResult)

})
