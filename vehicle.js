define(["require", "exports"], function (require, exports) {
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
    exports.Vehicle = Vehicle;
});
