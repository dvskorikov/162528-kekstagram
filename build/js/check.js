"use strict";

function getMessage(a, b) {
  // GIF
  if (typeof a === "boolean") {
    // GIF анимированный
    if (a) {
      return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
      // GIF НЕанимированный
    } else {
      return "Переданное GIF-изображение не анимировано";
    }
    // SVG
  } else if (typeof a === "number") {
    return "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
    // JPG
  } else if ((typeof a === "object") && (typeof b === "object")) {
    var twoArraysAmount = a.reduce(function(arg1, arg2, indx) {
    return arg1 + arg2 * b[indx];
    }, 0);
    return "Общая площадь артефактов сжатия: " + twoArraysAmount + " пикселей";
    // PNG
  } else if (typeof a === "object") {
    var arrayAmount = a.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    return "Количество красных точек во всех строчках изображения: " + arrayAmount;
  }
}
