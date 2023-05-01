/* 
 Функція validSolution() спочатку перевіряє кожен рядок дошки на наявність 
 дублікатів або нулів, ітераційно переглядаючи кожен рядок і кожен стовпець
 і додаючи значення до масиву. 
 Якщо масив вже містить значення або якщо значення дорівнює 0, 
 функція негайно повертає false. Це гарантує, що всі рядки дошки 
 містять лише унікальні значення від 1 до 9.
*/
function validSolution(board) {
  for (let row = 0; row < 9; row++) {
    const rowValues = [];
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (rowValues.includes(value) || value === 0) {
        return false;
      }
      rowValues.push(value);
    }
  }
  /* 
   Тут перевіряє кожен стовпчик дошки на наявність дублікатів, 
   ітераційно переглядаючи кожен стовпчик і кожен рядок і додаючи 
   значення до масиву. 
   Якщо масив вже містить значення, функція негайно повертає false. 
   Це гарантує, що всі стовпці дошки містять лише унікальні значення від 1 до 9.
  */
  for (let col = 0; col < 9; col++) {
    const colValues = [];
    for (let row = 0; row < 9; row++) {
      const value = board[row][col];
      if (colValues.includes(value)) {
        return false;
      }
      colValues.push(value);
    }
  }
  /* 
  Далі функція перевіряє кожну підсітку 3x3 дошки на наявність дублікатів,
  ітераційно переглядаючи кожну підсітку і кожну клітинку в ній, і додаючи значення в масив. 
  Якщо масив вже містить значення, функція негайно повертає false. 
  Це гарантує, що всі підсітки на дошці містять лише унікальні значення від 1 до 9.
  */
  for (let gridRow = 0; gridRow < 9; gridRow += 3) {
    for (let gridCol = 0; gridCol < 9; gridCol += 3) {
      const subGridValues = [];
      for (let row = gridRow; row < gridRow + 3; row++) {
        for (let col = gridCol; col < gridCol + 3; col++) {
          const value = board[row][col];
          if (subGridValues.includes(value)) {
            return false;
          }
          subGridValues.push(value);
        }
      }
    }
  }
  return true;
}

// Приклад коли вертає true
const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];
// Змінившу якусь цифру в табилці на 0, отримуємо false
// Виводимо результат у консоль
console.log(validSolution(board));


