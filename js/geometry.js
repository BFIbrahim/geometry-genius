// Card one Completed
document.getElementById('tringle-calc-btn').addEventListener('click', function () {
    // const tringleNameElement = document.getElementById('tringle-name');
    // const tringleName = tringleNameElement.innerText;
    const tringleName = getElementName('tringle-name')

    const tringleBaseValue = getInputValue('tringle-Base-field')
    const tringleHeightValue = getInputValue('tringle-height-field')

    const tringleResult = 0.5 * tringleBaseValue * tringleHeightValue;

    if(isNaN(tringleBaseValue && tringleHeightValue)){
        alert('Please Enter a valid Number')
    }
    else{
        const tringleBase = document.getElementById('tringle-base-value');
        const tringleHeight = document.getElementById('tringle-height-value')
        tringleBase.innerText = tringleBaseValue
        tringleHeight.innerText = tringleHeightValue;
    
        setResult(tringleName, tringleResult)
    }

})

// card Two Completed
document.getElementById('rectangle-btn-calc').addEventListener('click', function () {
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
document.getElementById('parallelogram-btn-calc').addEventListener('click', function () {
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

// Card Four Completed
document.getElementById('rhombus-btn-calc').addEventListener('click', function () {
    const rhombusName = getElementName('rhombus-name');

    const rhombusD1Value = getInputValue('rhombus-d1-field')
    const rhombusD2Value = getInputValue('rhombus-d2-field')

    const rhombusResult = 0.5 * rhombusD1Value * rhombusD2Value;

    if(isNaN(rhombusD1Value && rhombusD2Value)){
        alert('Please Enter a Valid Number')
    }
    else{
        const rhombusD1 = document.getElementById('rhombos-d1-value')
        const rhombusD2 = document.getElementById('rhombos-d2-value')
        rhombusD1.innerText = rhombusD1Value;
        rhombusD2.innerText = rhombusD2Value;
    
        setResult(rhombusName, rhombusResult)
    }

})

// Card Five completed
document.getElementById('Pentagon-btn-calc').addEventListener('click', function () {
    const pentagonName = getElementName('pentagon-Name');

    const pentagonPValue = getInputValue('Pentagon-p-field')
    const pentagonBValue = getInputValue('Pentagon-b-field')

    const pentagonResult = 0.5 * pentagonPValue * pentagonBValue;

    const pentagonP = document.getElementById('pentagon-p-value')
    const pentagonB = document.getElementById('pentagon-b-value')
    pentagonP.innerText = pentagonPValue;
    pentagonB.innerText = pentagonBValue;

    setResult(pentagonName, pentagonResult)

})

// Card Six completed
document.getElementById('ellipse-btn-calc').addEventListener('click', function () {
    const ellipseName = getElementName('ellipse-Name');

    const ellipseAValue = getInputValue('ellipse-a-field')
    const ellipseBvalue = getInputValue('ellipse-b-field')

    const ellipseResult = (3.14 * ellipseAValue * ellipseBvalue).toFixed(2);

    const ellipseA = document.getElementById('ellipse-a-value')
    const ellipseB = document.getElementById('ellipse-b-value')
    const paiValue = document.getElementById('piValue');
    paiValue.innerText = 3.14
    ellipseA.innerText = ellipseAValue;
    ellipseB.innerText = ellipseBvalue;

    setResult(ellipseName, ellipseResult)

})



// Question page Added:
document.getElementById("blog-btn").addEventListener('click', function () {
    window.location.href = "answer.html"
});






