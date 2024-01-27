const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const container = document.querySelector('#board');
const squareNumber = 1000;

for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    container.append(square);
}