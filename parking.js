define(["require", "exports", './employee'], function (require, exports, employee_1) {
    var _this = this;
    // import {Vehicle} from './vehicle';
    // import {Feedback} from './feedback';
    var a = new employee_1["default"]('varun', 'varun', 'varun', 'varun', 'varun', 'varun');
    console.log(a);
    // class Employee{
    //     fullName : string;
    //     gender : string ;
    //     email : string;
    //     password : string;
    //     mobileNumber : string;
    //     employeeId : string;
    //     constructor(fullname : string , gender : string , email : string , password : string , mobileNumber : string , id : string){
    //         this.fullName = fullname;
    //         this.gender = gender;
    //         this.email = email;
    //         this.password = password;
    //         this.mobileNumber = mobileNumber;
    //         this.employeeId = id;
    //     }
    // }
    var Vehicle = (function () {
        function Vehicle(company, model, number, type, identification, id) {
            this.vehicleCompany = company;
            this.vehicleModel = model;
            this.vehicleNumber = number;
            this.vehicleType = type;
            this.identification = identification;
            this.employeeid = id;
        }
        return Vehicle;
    })();
    var Feedback = (function () {
        function Feedback(name, email, subject, message) {
            this.name = name;
            this.email = email;
            this.subject = subject;
            this.message = message;
        }
        return Feedback;
    })();
    //Handling of expand collapse
    document.getElementById('employeeHead').addEventListener('click', function (e) {
        document.getElementById('employeeHead').classList.toggle('dark');
        document.getElementById('employeeForm').classList.toggle('hide');
        document.getElementById('nameDiv').classList.toggle('hide');
    });
    document.getElementById('vehicleHead').addEventListener('click', function (e) {
        document.getElementById('vehicleHead').classList.toggle('dark');
        document.getElementById('addVehicleForm').classList.toggle('hide');
        document.getElementById('companyDiv').classList.toggle('hide');
    });
    document.getElementById('feedbackHead').addEventListener('click', function (e) {
        document.getElementById('feedbackHead').classList.toggle('dark');
        document.getElementById('giveFeedbackForm').classList.toggle('hide');
    });
    document.getElementById('pricingHead').addEventListener('click', function (e) {
        if (document.getElementById('pricingHead').classList.contains('dark')) {
            document.getElementById('pricingHead').classList.remove('dark');
            document.getElementById('mainPrice').classList.remove('hide');
        }
        else {
            document.getElementById('pricingHead').classList.add('dark');
            document.getElementById('mainPrice').classList.add('hide');
        }
    });
    //variables declaration used for employee
    var fullName;
    var email;
    var password;
    var cpassword;
    var mobilenumber;
    var empGender;
    var finalPassword;
    var empId;
    //Event Handling of Employee detail section Starts Here
    //event listener on Full Name
    document.getElementById('fullname').addEventListener('focusout', function (e) {
        var name = document.getElementById('fullname').value;
        if (name.length < 3 && isNaN(parseInt(name))) {
            document.getElementById('fullname').classList.add('red');
            document.getElementById('error').innerHTML = 'Your Name Must have more than 2 letters';
        }
        else {
            fullName = name;
            document.getElementById('nameDiv').classList.toggle('hide');
            document.getElementById('error').innerHTML = '';
            document.getElementById('genderLabel').innerHTML = 'Hi <span>' + fullName + '</span> will you specify your gender';
            document.getElementById('genderDiv').classList.toggle('hide');
        }
    });
    //Event Listener on Gender Buttons
    document.getElementById('male').addEventListener('focusout', function (e) {
        if (document.getElementById('male').checked) {
            empGender = document.getElementById('male').value;
            document.getElementById('genderDiv').classList.toggle('hide');
            document.getElementById('emailDiv').classList.toggle('hide');
            document.getElementById('emailLabel').innerHTML = 'Please, Enter Your Mail Id';
        }
    });
    document.getElementById('female').addEventListener('focusout', function (e) {
        if (document.getElementById('female').checked) {
            empGender = document.getElementById('female').value;
            document.getElementById('genderDiv').classList.toggle('hide');
            document.getElementById('emailDiv').classList.toggle('hide');
            document.getElementById('emailLabel').innerHTML = 'Please, Enter Your Mail Id';
        }
    });
    //Event Listener for email
    document.getElementById('empEmail').addEventListener('focusout', function (e) {
        var mail = document.getElementById('empEmail').value;
        var index = mail.indexOf('@metacube.com');
        if (index !== -1) {
            email = mail;
            document.getElementById('emailDiv').classList.toggle('hide');
            document.getElementById('error').innerHTML = '';
            document.getElementById('passwordDiv').classList.toggle('hide');
            document.getElementById('passwordLabel').innerHTML = 'Please, Enter Paswword To Secure Yourself.';
        }
        else {
            document.getElementById('empEmail').classList.add('red');
            document.getElementById('error').innerHTML = 'Your Mail Id Must Be Official';
        }
    });
    //Event listener for password
    document.getElementById('password').addEventListener('keyup', function (e) {
        var pass = document.getElementById('password').value;
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
        if (pass.length >= 1) {
            password = pass;
            document.getElementById('password').classList.add('red');
        }
        if (pass.match(mediumRegex)) {
            password = pass;
            document.getElementById('password').classList.add('orange');
        }
        if (pass.match(strongRegex)) {
            password = pass;
            document.getElementById('password').classList.add('green');
        }
    });
    document.getElementById('confirmpassword').addEventListener('focusout', function (e) {
        var cpass = document.getElementById('confirmpassword').value;
        cpassword = cpass;
        if (cpassword.length > 7) {
            document.getElementById('confirmpassword').classList.add('input-password');
            if (cpassword === password) {
                cpassword = cpass;
                document.getElementById('passwordDiv').classList.toggle('hide');
                document.getElementById('mobileDiv').classList.toggle('hide');
                document.getElementById('error').innerHTML = '';
                document.getElementById('submitDiv').classList.toggle('hide');
                document.getElementById('mobileLabel').innerHTML = 'Please, Give Your Mobile Number';
            }
            else {
                document.getElementById('error').innerHTML = 'password does not match';
            }
        }
        else {
            document.getElementById('confirmpassword').classList.add('red');
        }
    });
    //Event Listener on mobile number 
    document.getElementById('contactnumber').addEventListener('focusout', function (e) {
        var mobNum = document.getElementById('contactnumber').value;
        if (mobNum.length > 8 && isNaN(parseInt(mobNum))) {
            mobilenumber = mobNum;
            document.getElementById('error').innerHTML = '';
        }
        else {
            document.getElementById('contactnumber').classList.add('red');
            document.getElementById('error').innerHTML = 'Your Mobile Number Must have more than 8 digits';
        }
    });
    //Event Listener on submit button
    document.getElementById('addEmployeeSubmit').addEventListener('click', function (e) {
        e.preventDefault();
        var contact = document.getElementById('contactnumber').value;
        if (contact.length > 8 && !isNaN(parseInt(contact))) {
            mobilenumber = contact;
            document.getElementById('error').innerHTML = '';
            document.getElementById('employeeForm').classList.toggle('hide');
            document.getElementById('addEmployee').childNodes[1].classList.add('dark');
            document.getElementById('addVehicleForm').classList.toggle('hide');
            empId = (Math.random() * 100000).toFixed(0);
            document.getElementById('empIdGenerated').classList.remove('hide');
            document.getElementById('empIdGenerated').innerHTML = 'Your Employee Id is ' + empId;
            document.getElementById('addVehicleForm').childNodes[1].classList.toggle('hide');
            //Saving data into employee object
            // let employeedata = new Employee(fullName , empGender , email ,password , mobilenumber , empId );
            //console.log(employeedata);
            //toggeling fields 
            document.getElementById('submitDiv').classList.toggle('hide');
            document.getElementById('mobileDiv').classList.toggle('hide');
            //resetting all fields
            document.getElementById('fullname').value = '';
            document.getElementById('female').checked = false;
            document.getElementById('female').checked = false;
            document.getElementById('empEmail').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmpassword').value = '';
            document.getElementById('contactnumber').value = '';
        }
        else {
            _this.classList = 'input-text red';
            document.getElementById('error').innerHTML = 'Your Mobile Number Must have more than 8 digits';
        }
    });
    //Handling of employee form events ends here
    //variables declared for vehicle
    var company;
    var model;
    var type;
    var number;
    var empIdForVehicle;
    var identification;
    //Handling of Vehicle details form starts here
    //Event for vechile company field
    document.getElementById('vehiclemake').addEventListener('focusout', function (e) {
        var make = document.getElementById('vehiclemake').value;
        if (make.length > 2) {
            company = make;
            document.getElementById('companyDiv').classList.toggle('hide');
            document.getElementById('modelDiv').classList.toggle('hide');
            document.getElementById('modelLabel').innerHTML = 'Specify Your Vehicle Model';
        }
        else {
            document.getElementById('vehiclemake').classList.add('red');
        }
    });
    //Event for vecicle model
    document.getElementById('vehiclemodel').addEventListener('focusout', function (e) {
        var vehicleModel = document.getElementById('vehiclemodel').value;
        if (vehicleModel.length > 2) {
            model = vehicleModel;
            document.getElementById('modelDiv').classList.toggle('hide');
            document.getElementById('typeDiv').classList.toggle('hide');
        }
        else {
            document.getElementById('vehiclemodel').classList.add('red');
        }
    });
    //Event on vehicle type
    document.getElementById('type-select').addEventListener('focusout', function (e) {
        var vehicleType = document.getElementById('type-select').value;
        if (vehicleType != '') {
            type = vehicleType;
            document.getElementById('typeDiv').classList.toggle('hide');
            document.getElementById('numberDiv').classList.toggle('hide');
        }
    });
    //Event for vehicle number
    document.getElementById('vehiclenumber').addEventListener('focusout', function (e) {
        var vehicleNumber = document.getElementById('vehiclenumber').value;
        if (vehicleNumber.length > 3) {
            number = vehicleNumber;
            document.getElementById('numberDiv').classList.toggle('hide');
            document.getElementById('empIdDiv').classList.toggle('hide');
            document.getElementById('empIdLabel').innerHTML = 'Enter the Id generated above';
        }
    });
    //Event for employee id
    document.getElementById('empIdFill').addEventListener('focusout', function (e) {
        var id = document.getElementById('empIdFill').value;
        if (id.length === 5) {
            empIdForVehicle = id;
            document.getElementById('empIdDiv').classList.toggle('hide');
            document.getElementById('identificationDiv').classList.toggle('hide');
            document.getElementById('vehicleSubmitDiv').classList.toggle('hide');
        }
    });
    //Event for identification field
    document.getElementById('identification').addEventListener('focusout', function (e) {
        identification = document.getElementById('identification').value;
    });
    //Event for submit Vehicle form button
    document.getElementById('addVehicleSubmit').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('addVehicleForm').classList.toggle('hide');
        document.getElementById('mainPrice').classList.toggle('hide');
        document.getElementById('vehicleHead').classList.add('dark');
        document.getElementById('vehicleregistered').innerHTML = 'Your ' + ' ' + company + ' ' + model + ' ' + number + ' is registered with Metacube Parking System.';
        document.getElementById('nextInfo').innerHTML = 'Go to pricing section to choose your parking plan';
        if (type === 'Car') {
            document.getElementById('Bike').classList.add('hide');
            document.getElementById('Cycle').classList.add('hide');
            document.getElementById('temp').appendChild(document.getElementById('Car'));
        }
        else if (type === 'Bike') {
            document.getElementById('Car').classList.add('hide');
            document.getElementById('Cycle').classList.add('hide');
            document.getElementById('temp').appendChild(document.getElementById('Bike'));
        }
        else if (type === 'Cycle') {
            document.getElementById('Bike').classList.add('hide');
            document.getElementById('Car').classList.add('hide');
            document.getElementById('temp').appendChild(document.getElementById('Cycle'));
        }
        //saving data to vehicle object
        var vehicleData = new Vehicle(company, model, number, type, identification, empIdForVehicle);
        console.log(vehicleData);
        //resetting all fields
        document.getElementById('vehiclemake').value = '';
        document.getElementById('vehiclemodel').value = '';
        document.getElementById('type-select').value = '';
        document.getElementById('vehiclenumber').value = '';
        document.getElementById('empIdFill').value = '';
        document.getElementById('identification').value = '';
    });
    //Event Handling for Vehicle Form ends here
    //Data to be handled  for feedback
    var feedName;
    var feedEmail;
    var feedSubject;
    var feedMessage;
    //Event for submit feedback
    document.getElementById('giveFeedbackSubmit').addEventListener('click', function (e) {
        e.preventDefault();
        feedName = document.getElementById('feed-name').value;
        feedEmail = document.getElementById('feed-email').value;
        feedSubject = document.getElementById('feed-subject').value;
        feedMessage = document.getElementById('feed-message').value;
        //saving data to object
        var feedback = new Feedback(feedName, feedEmail, feedSubject, feedMessage);
        console.log(feedback);
        //resetting feedback form field
        document.getElementById('feed-name').value = '';
        document.getElementById('feed-email').value = '';
        document.getElementById('feed-subject').value = '';
        document.getElementById('feed-message').value = '';
    });
    //Event Handling for Feedback form ends here
    //Event Listener for pricing container
    var initialPrice = '';
    var bill;
    var plansElement = document.getElementsByClassName('plan-choose');
    // for(var i = 0 ; i < plansElement.length ; i++){
    //     plansElement[i].addEventListener('click' , (e) => {
    //         initialPrice = (<HTMLParagraphElement>plansElement[i]).innerHTML;
    //         let temp=initialPrice.split(' ');
    //         this.parentNode.previousElementSibling.childNodes[1].innerHTML=temp[0];
    //         this.parentNode.previousElementSibling.childNodes[3].innerHTML='/'+temp[1];
    //     });
    // }
    // const purchaseElement=document.getElementsByClassName('purchase');
    // for(let i = 0 ; i < purchaseElement.length ; i++){
    //     purchaseElement[i].addEventListener('click' , (e) => {
    //         initialPrice=this.parentNode.childNodes[3].childNodes[1].innerHTML;
    //         let pricePlan=this.parentNode.childNodes[3].childNodes[3].innerHTML;
    //         bill=initialPrice+' '+pricePlan;
    //          let myPass=document.getElementById('myPass');
    //          document.getElementById('passWrapper').classList.remove('hide');
    //          myPass.classList.remove('hide');
    //          //setting values on pass fields
    //          (<HTMLInputElement>myPass.childNodes[3].childNodes[1]).innerHTML = fullName;
    //          (<HTMLInputElement>myPass.childNodes[5].childNodes[1]).innerHTML = empId;
    //          (<HTMLInputElement>myPass.childNodes[7].childNodes[1]).innerHTML = type;
    //          (<HTMLInputElement>myPass.childNodes[9].childNodes[1]).innerHTML = company;
    //          (<HTMLInputElement>myPass.childNodes[11].childNodes[1]).innerHTML = model;
    //          (<HTMLInputElement>myPass.childNodes[13].childNodes[1]).innerHTML = bill;
    //     })
    // }
    //Event listener for pricing container ends here
    document.getElementById('p3').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p3').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p1').innerHTML = temp[0];
        document.getElementById('p2').innerHTML = '/' + temp[1];
    });
    document.getElementById('p4').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p4').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p1').innerHTML = temp[0];
        document.getElementById('p2').innerHTML = '/' + temp[1];
    });
    document.getElementById('p5').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p5').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p1').innerHTML = temp[0];
        document.getElementById('p2').innerHTML = '/' + temp[1];
    });
    document.getElementById('p8').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p8').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p6').innerHTML = temp[0];
        document.getElementById('p7').innerHTML = '/' + temp[1];
    });
    document.getElementById('p9').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p9').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p6').innerHTML = temp[0];
        document.getElementById('p7').innerHTML = '/' + temp[1];
    });
    document.getElementById('p10').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p10').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p6').innerHTML = temp[0];
        document.getElementById('p7').innerHTML = '/' + temp[1];
    });
    document.getElementById('p13').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p13').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p11').innerHTML = temp[0];
        document.getElementById('p12').innerHTML = '/' + temp[1];
    });
    document.getElementById('p14').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p14').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p11').innerHTML = temp[0];
        document.getElementById('p12').innerHTML = '/' + temp[1];
    });
    document.getElementById('p15').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p15').innerText;
        var temp = initialPrice.split(' ');
        document.getElementById('p11').innerHTML = temp[0];
        document.getElementById('p12').innerHTML = '/' + temp[1];
    });
    document.getElementById('purchaseCar').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p11').innerHTML;
        var pricePlan = document.getElementById('p12').innerHTML;
        bill = initialPrice + ' ' + pricePlan;
        var myPass = document.getElementById('myPass');
        document.getElementById('passWrapper').classList.remove('hide');
        myPass.classList.remove('hide');
        document.getElementById('nameP').innerHTML = fullName;
        document.getElementById('idP').innerHTML = empId;
        document.getElementById('typeP').innerHTML = type;
        document.getElementById('companyP').innerHTML = company;
        document.getElementById('modelP').innerHTML = model;
        document.getElementById('priceP').innerHTML = bill;
    });
    document.getElementById('purchaseBike').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p6').innerHTML;
        var pricePlan = document.getElementById('p7').innerHTML;
        bill = initialPrice + ' ' + pricePlan;
        var myPass = document.getElementById('myPass');
        document.getElementById('passWrapper').classList.remove('hide');
        myPass.classList.remove('hide');
        document.getElementById('nameP').innerHTML = fullName;
        document.getElementById('idP').innerHTML = empId;
        document.getElementById('typeP').innerHTML = type;
        document.getElementById('companyP').innerHTML = company;
        document.getElementById('modelP').innerHTML = model;
        document.getElementById('priceP').innerHTML = bill;
    });
    document.getElementById('purchaseCycle').addEventListener('click', function (e) {
        initialPrice = document.getElementById('p1').innerHTML;
        var pricePlan = document.getElementById('p2').innerHTML;
        bill = initialPrice + ' ' + pricePlan;
        var myPass = document.getElementById('myPass');
        document.getElementById('passWrapper').classList.remove('hide');
        myPass.classList.remove('hide');
        document.getElementById('nameP').innerHTML = fullName;
        document.getElementById('idP').innerHTML = empId;
        document.getElementById('typeP').innerHTML = type;
        document.getElementById('companyP').innerHTML = company;
        document.getElementById('modelP').innerHTML = model;
        document.getElementById('priceP').innerHTML = bill;
    });
    //convert price into usd
    document.getElementById('usd').addEventListener('click', function (e) {
        var costs = document.getElementsByClassName('plan-choose');
        for (var i = 0; i < costs.length; i++) {
            var temp_1 = costs[i].innerHTML;
            if (temp_1[0] === '₹') {
                temp_1 = temp_1.replace('₹', '$');
                var tempChange = temp_1.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('$');
                var tempMain = '' + parseInt(((parseFloat(tempChange[1]) / 74) * 100).toString()) / 100;
                costs[i].innerHTML = '$' + tempMain + ' ' + tempPlan;
            }
            else if (temp_1[0] == '¥') {
                temp_1 = temp_1.replace('¥', '$');
                var tempChange = temp_1.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('$');
                var tempMain = parseInt(((parseFloat(tempChange[1]) / 106.59) * 100).toString()) / 100;
                costs[i].innerHTML = '$' + tempMain + ' ' + tempPlan;
            }
        }
        var curren = document.getElementsByClassName('curren');
        for (var i = 0; i < curren.length; i++) {
            var temp = curren[i].innerHTML;
            if (temp[0] === '₹') {
                temp = temp.replace('₹', '$');
                var tempChange = temp.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('$');
                var tempMain = parseInt(((parseFloat(tempChange[1]) / 74) * 100).toString()) / 100;
                curren[i].innerHTML = '$' + tempMain;
            }
            else if (temp[0] == '¥') {
                temp = temp.replace('¥', '$');
                var tempChange = temp.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('$');
                var tempMain = parseInt(((parseFloat(tempChange[1]) / 106.59) * 100).toString()) / 100;
                curren[i].innerHTML = '$' + tempMain;
            }
        }
        // var price=employeeDetails.bill.split('₹');
        // console.log(price,price[1],parseInt(price[1]));
        // document.getElementById('myPass').childNodes[13].childNodes[1].innerHTML='$'+parseInt((parseInt(price[1])/74.85)*100)/100;
    });
    //convert in to yen
    document.getElementById('yen').addEventListener('click', function (e) {
        var costs = document.getElementsByClassName('plan-choose');
        for (var i = 0; i < costs.length; i++) {
            var temp = costs[i].innerHTML;
            if (temp[0] === '₹') {
                temp = temp.replace('₹', '¥');
                var tempChange = temp.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('¥');
                var tempMain = parseInt(((parseFloat(tempChange[1]) * 1.42) * 100).toString()) / 100;
                costs[i].innerHTML = '¥' + tempMain + ' ' + tempPlan;
            }
            else if (temp[0] == '$') {
                temp = temp.replace('$', '¥');
                var tempChange = temp.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('¥');
                var tempMain = parseInt(((parseFloat(tempChange[1]) * 106.59) * 100).toString()) / 100;
                costs[i].innerHTML = '¥' + tempMain + ' ' + tempPlan;
            }
        }
        var curren = document.getElementsByClassName('curren');
        for (var i = 0; i < curren.length; i++) {
            var temp = curren[i].innerHTML;
            if (temp[0] === '₹') {
                temp = temp.replace('₹', '¥');
                var tempChange = temp.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('¥');
                var tempMain = parseInt(((parseFloat(tempChange[1]) * 1.42) * 100).toString()) / 100;
                curren[i].innerHTML = '¥' + tempMain;
            }
            else if (temp[0] == '$') {
                temp = temp.replace('$', '¥');
                var tempChange = temp.split(' ');
                var tempPlan = tempChange[1];
                tempChange = tempChange[0].split('¥');
                var tempMain = parseInt(((parseFloat(tempChange[1]) * 106.59) * 100).toString()) / 100;
                curren[i].innerHTML = '¥' + tempMain;
            }
        }
    });
});
