class Feedback{
    
    name : string;
    email : string;
    subject : string;
    message : string;

    constructor(name: string , email : string , subject : string , message: string){
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}

export = {Feedback};