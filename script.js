document.getElementById('convert').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        document.getElementById('result').innerText = "Enter Number Please";
        return;
    }

    let meters;

    if (fromUnit === 'meter') {
        meters = value;
    } else if (fromUnit === 'decimeter') {
        meters = value / 10;
    } else if (fromUnit === 'centimeter') {
        meters = value / 100;
    } else if (fromUnit === 'millimeter') {
        meters = value / 1000;
    } else if (fromUnit === 'decameter') {
        meters = value * 10;
    } else if (fromUnit === 'hectometer') {
        meters = value * 100;
    } else if (fromUnit === 'kilometer') {
        meters = value * 1000;
    }

    let result;

    if (toUnit === 'meter') {
        result = meters;
    } else if (toUnit === 'kilometer') {
        result = meters / 1000;
    } else if (toUnit === 'centimeter') {
        result = meters * 100;
    } else if (toUnit === 'decimeter') {
        result = meters * 10;
    } else if (toUnit === 'millimeter') {
        result = meters * 1000;
    } else if (toUnit === 'hectometer') {
        result = meters / 100;
    } else if (toUnit === 'decameter') {
        result = meters * 10;
    }

    document.getElementById('result').innerText = result.toFixed(2); // عرض النتيجة بدقة نقطتين
});
