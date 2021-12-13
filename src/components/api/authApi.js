import { api } from "./api"

export const singInApi = (data, callback) => {
    api().post("/signIn",data).then(
        respose => {
            const data = respose.data;
            console.log(data);
            callback(true , data)
        }
    ).catch((err) => {
        console.log(err);
        callback(false,err)
    }
    )
}

export const singUpApi = (data , callback) => {
    api().post("/signUp", data).then(
        respose => {
            const data = respose.data;
            console.log(data);
            callback(true , data)
        }
    ).catch((err) => {
        console.log(err);
        callback(false,err)
    }
    )
}