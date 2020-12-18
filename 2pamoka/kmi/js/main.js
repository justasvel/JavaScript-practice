let form = document.querySelector('#form1');
let p = document.querySelector('#kmi');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = e.target.elements.height.value;
    let weight = parseInt(e.target.elements.weight.value);

    height = parseFloat(height);

    kmi = parseFloat((weight / Math.pow(height, 2)).toFixed(2));


    p.textContent = `Jusu KMI yra ${kmi}`;
});