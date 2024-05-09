// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: May 2024
// This file contains the JS functions for index.html

function checking() {
  const multiplier = parseInt(document.getElementById("multiplier").value)
  const multiplied = parseInt(document.getElementById("multiplied").value)
  let counter = 0
  let number = 0
  while(counter < multiplied) {
     number += 0 + multiplier
     counter++    
  }
  document.getElementById("result").innerHTML = number
}