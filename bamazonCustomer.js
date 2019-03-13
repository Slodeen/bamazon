var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

function customerPurchase() {

    inquirer.prompt([
              {
                  type: "input",
                  name: "item_id",
                  message: "Please enter the the ID number that you would like to purchase: "
                
              },
              {
                  type: "input",
                  name: "stock_quantity",
                  message: "Please enter the quantity: "
             }
            ]).then(function(input) {
              
      
              var item = input.item_id;
              var quantity = input.stock_quantity;
      
              var query = 'SELECT * FROM products WHERE ?';
      
              connection.query(query, {item_id: item}, function(err, res) {
                  if (err) throw err;
      
                  if (res.length === 0) {
                      console.log("Invalid ID");
                      stockAvailable();
      
                  } else {
                      var itemInformation = res[0];
      
                    if (quantity <= itemInformation.stock_quantity) {
                      console.log("Your order is in process!");
      
                      var updateQuery = 'UPDATE products SET stock_quantity = ' + (itemInformation.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                      connection.query(updateQuery, function(err, res) {
                        if (err) throw err;
                        
                        console.log('Your total price is $' + itemInformation.price * quantity);
                        connection.end();
                          })
                      } else {
                          console.log("insufficient quantity!");
                          stockAvailable();
                      }
                  }
              })
          })};
      
      
function stockAvailable() {

    query = 'SELECT * FROM products';
    connection.query(query, function(err, res) {
        if (err) throw err;
      
        console.log("Current Stock");
      
        var itemsDisplay = "";
           for (var i = 0; i < res.length; i++) {
                  itemsDisplay = "";
                  itemsDisplay += "ID: " + res[i].item_id + "||";
                  itemsDisplay += "Product Name: " + res[i].product_name + "||";
                  itemsDisplay += "Department: " + res[i].department_name + "||";
                  itemsDisplay += "Price: $" + res[i].price + '\n';
      
                  console.log(itemsDisplay);
              }
      
                console.log("---------------------------------------------------------------------\n");
      
                customerPurchase();
          })
      }

function runBamazon() {
          stockAvailable();
      }
      
runBamazon();