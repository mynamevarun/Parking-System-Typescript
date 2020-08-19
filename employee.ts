class Employee{

    fullName : string;
    gender : string ;
    email : string;
    password : string;
    mobileNumber : string;
    employeeId : string;

    constructor(fullname : string , gender : string , email : string , password : string , mobileNumber : string , id : string){
        this.fullName = fullname;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.employeeId = id;
    }

}

export default Employee;