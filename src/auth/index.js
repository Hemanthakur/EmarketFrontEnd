// isLoggedIn => 
export const isLoggedIn = () =>{
    let data = localStorage.getItem("data");
    if(data===null){
        return false;
    }
    else{
        return true;
    }
};


//doLogin=> data=>to localstorage
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
};

//dologout=> remove from localstorage
export const doLogout=(next)=>{
    localStorage.removeItem("data")
    localStorage.removeItem("name")
    localStorage.removeItem("sellerId")
    localStorage.removeItem("buyerId")
    next()
}

//getCurrentUser
export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"));
    }
    else{
        return undefined;
    }
};

const seller=localStorage.getItem("sellerId")
export const sellerUser=()=>{
    if(isLoggedIn()){
        if(seller!= null){
            return true
        }else{
            return false
        }
    }
}