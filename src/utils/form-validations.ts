const signInFormValidator = (email:string, password:string) => {
    let isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password);
    if(!isEmailValid) return 'Email not valid!';
    if(!isPasswordValid) return 'Password complexity dosen\'t match';

    return null;
}

const  utils = {
    signInFormValidator
}

export default utils