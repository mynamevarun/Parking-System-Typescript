class Vehicle{
    
    vehicleCompany : string;
    vehicleModel : string;
    vehicleNumber : string;
    vehicleType : string;
    identification : string;
    employeeid : string;

    constructor(company : string , model : string , number : string , type : string , identification : string , id : string){
        this.vehicleCompany = company ;
        this.vehicleModel = model ;
        this.vehicleNumber = number;
        this.vehicleType = type ;
        this.identification = identification ;
        this.employeeid = id;
    }
}

export ={Vehicle};