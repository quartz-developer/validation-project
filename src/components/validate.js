export const validate = (data ,type) => {
    
    const errors = {};


    if(!data.email) {
        errors.email = "Email is Empty"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invalid"
    } else {
        delete errors.email
    }


    if (!data.password) { 
        errors.password = "Password is Empty"
    } else if(data.password.length < 6){
        errors.password = "Password needs to be 6 character or more"
    } else {
        delete errors.password
    }


    if (type === "signup") {

        if(!data.name.trim()) {
            errors.name = "UserName is Empty"
        } else {
            delete errors.name
        }

        if (!data.confrimPassword) {
            errors.confrimPassword = "confrimPassword is Empty"
        } else if (data.confrimPassword !== data.password) {
            errors.confrimPassword = "Password don't match"
        } else {
            delete errors.confrimPassword
        }
    
    
        if(data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Accept our regulations"
        }    
    
    }

    return errors;
} 