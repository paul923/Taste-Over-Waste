var database = firebase.database();
var ref = database.ref('exportedINGREDIENTS');

function exportData1() {

  var test1 = document.getElementById('c1').textContent;
  console.log(test1);
  
  var data1 = {
    Name: test1,
    Quantity: 1,
    Expiration: '3 days'
  }
  ref.push(data1);
  console.dir(data1);

}

function exportData2() {
  
  var test2 = document.getElementById('c2').textContent;
  
  var data2 = {
    Name: test2,
    Quantity: 1,
    Expiration: '4 days'
  }
  ref.push(data2);

}

function exportData3() {

  var test3 = document.getElementById('c3').textContent;
  console.log(test3);

  var data3 = {
    Name: test3,
    Quantity: 1,
    Expiration: '5 days'
  }
  ref.push(data3);
  console.dir(data3);
}

function exportData4() {

  var test4 = document.getElementById('c4').textContent;
  console.log(test4);

  var data4 = {
    Name: test4,
    Quantity: 1,
    Expiration: '6 days'
  }
  ref.push(data4);
  console.dir(data4);
}

// function exportData() {

//   var test1 = $('#c1').textContent;
//   console.log(test1);
  
//   ingredient. data.

//   var data1 = {
//     Name: ingredient('something').('name'),
//     Quantity: 1,
//     Expiration: '3 days'
//   }
//   ref.push(data1);
//   console.dir(data1);

// }
