// const express = require("express");
const mysql = require("mysql");
// const inquirer = require("inquirer");
// const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Cal_mel@1013",
  database: "companyDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected on port 3306!")
//   runSearch();
});
