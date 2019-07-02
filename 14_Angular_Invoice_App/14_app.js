// Create a Module
let app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function($scope) {
    $scope.editInovice = true;
    $scope.invoice = {
        customerData : {
            name : 'Mr. Rajan Jain',
            company : 'Jain Industries Inc.',
            address_1 : 'Plot No: 112',
            address_2 : 'Hitech City , Hyderabad',
            pincode : '501230'
        },
        companyData : {
            name : 'UiBrains Techno Labs',
            company : 'UiBrains.com',
            address_1 : 'Plot No: 1471 , Road No: 12',
            address_2 : 'Jubilee Hills , Hyderabad',
            pincode : '500546'
        },
        items : [

        ],
        gst : 18
    };
    $scope.addItem = function() {
        let newItem = {
            description : null,
            qty : null,
            cost : null
        };
        $scope.invoice.items.push(newItem);
    };
    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index,1);
    };
    $scope.subTotal = function() {
        let tempTotal  = 0;
        for(let item of $scope.invoice.items){
            tempTotal += (item.qty * item.cost);
        }
        return tempTotal;
    };
    $scope.addGST = function() {
        return $scope.subTotal() * $scope.invoice.gst / 100;
    };
    $scope.grandTotal = function() {
       return $scope.subTotal() + $scope.addGST();
    };
    $scope.ONInvoiceEdit = function() {
      $scope.editInovice = true;
    };
    $scope.OFFInvoiceEdit = function() {
        $scope.editInovice = false;
    };
    $scope.printDoc = function() {
       window.print();
    };
});