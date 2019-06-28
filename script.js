/*
var title = document.querySelector("h1");
console.log(title);
TweenMax.to(title, 1, {opacity: 0.3}); */

//коммивояжер

var matr = [
  ["a", 14, 9, 16, 7],
  [20, "a", 9, 19, 14],
  [18, 15, "a", 12, 12],
  [23, 10, 13, "a", 17],
  [7, 6, 6, 6,"a"],
];
/*
var write = function() { // вывод матрицы
  var stroke = "";
  for (var i = 0; i < matr[0].length; i++) {
    for (var j = 1; j < matr[0].length; j++) {
      stroke = stroke + mas[i][j]
    };
    console.log(stroke);
} */

var horizontalMin = [];
var verticalMin = [];

var findMin = function(isDeduction) {
  horizontalMin = [];
  verticalMin = [];
  for (var i = 0; i < matr[0].length; i++) {
    var howmanyNull = 0; // сколько нулей в строке
    if (matr[i][0] == "a") { // начальное значение min 
      var min = matr[i][1];
    } else {
      var min = matr[i][0];
    }
    
    for (var j = 0; j < matr[0].length; j++) { // ищем минимум
      
      if (matr[i][j] == 0) { // считаем количество нулей в строке
        howmanyNull++;  
      };
      
      if (min > matr[i][j]) { // находим минимум
        min = matr[i][j];
      }
    }
    
    if (howmanyNull == 1) {   //если в строке только один ноль
      for (var j = 0; j < matr[0].length; j++) {
        if ((matr[i][j] > 0) && (matr[i][j] != "a")) {
          min = matr[i][j];
        } 
      };
      
      for (var j = 0; j < matr[0].length; j++) { 
        if ((min > matr[i][j]) && (matr[i][j] > 0)) { 
          min = matr[i][j];
        }
      }
    }
    
    horizontalMin.push(min); // сохраняем все горизонтальные минимумы
    //console.log("mas: " + horizontalMin);
    if (isDeduction) { // если нужно вычитать минимумы
      for (var j = 0; j < matr[0].length; j++) { // вычитаем минимум из каждого элемента
        if (matr[i][j] != "a") {
          matr[i][j] = matr[i][j] - min;
        } 
      }
    }
  };

  //console.log(matr); // выводит правильные значения


  /* вертикальное*/

  for (var i = 0; i < matr[0].length; i++) {
    var howmanyNull = 0; // сколько нулей в строке
    if (matr[0][i] == "a") { // начальное значение min 
      var min = matr[1][i];
    } else {
      var min = matr[0][i];
    }

    for (var j = 0; j < matr[0].length; j++) { // ищем минимум
      if (matr[j][i] == 0) { // считаем количество нулей в строке
        howmanyNull++;  
      };
      
      if ((min > matr[j][i])) {
        min = matr[j][i];
      }
    }
    if ((howmanyNull == 1) && (!isDeduction)) {   //если в строке только один ноль
      for (var j = 0; j < matr[0].length; j++) {
        if ((matr[j][i] > 0) && (matr[j][i] != "a")) {
          min = matr[j][i];
        } 
      };
      
      for (var j = 0; j < matr[0].length; j++) { 
        if ((min > matr[j][i]) && (matr[j][i] > 0)) { 
          min = matr[j][i];
        }
      }
    }

    verticalMin.push(min); // сохраняем все горизонтальные минимумы    
    if (isDeduction) {
      for (var j = 1; j < matr[0].length; j++) { // вычитаем минимум из каждого элемента
        if (matr[j][i] != "a") {
          //console.log(matr[j][i] + " " + min + " ij: " + j + " " + i);
          matr[j][i] = matr[j][i] - min;
        } 
      }
    }
    
  };
}; // закончился поиск минимума и вычиты

findMin(true);
console.log(matr);




var privedBorder = 0; // нижняя граница приведения

for (var i = 0; i < horizontalMin.length; i++) {
  privedBorder = privedBorder + horizontalMin[i] + verticalMin[i];
}
console.log("нижняя граница приведения: " + privedBorder);


/* пошли повторяющиеся шаги */
var max = 0;
var way = ""; // двумерный массив со всеми путями

findMin();
console.log(horizontalMin + "     " + verticalMin);

for (var i = 0; i < verticalMin.length; i++) {
  if (max < verticalMin[i]) {
    max = horizontalMin[i];  
  }  
}

for (var i = 0; i < horizontalMin.length; i++) {
  if (max < horizontalMin[i]) {
    max = horizontalMin[i];
  }
} 
console.log(max);
//way = Number(i+1) + " -> " + Number(j+1);
//console.log(way);