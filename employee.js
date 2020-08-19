define(["require", "exports"], function (require, exports) {
    var Employee = (function () {
        function Employee(fullname, gender, email, password, mobileNumber, id) {
            this.fullName = fullname;
            this.gender = gender;
            this.email = email;
            this.password = password;
            this.mobileNumber = mobileNumber;
            this.employeeId = id;
        }
        return Employee;
    })();
    exports["default"] = Employee;
});
