// Enum 'LoginErrror' represents a fixed set of possible login error states
// Enums are used when a value can be ONE of a limited number of options

enum LoginErrror {
    unathorized = "unathorized",

    nouser = "nouser",

    wrongCredentials = "wrongCredentials",

    Internal = "Internal"
}

const printErrorMsg = (error: LoginErrror) => {

    if (error === LoginErrror.unathorized) {
        console.log("unathorized");
    }

    else if (error === LoginErrror.nouser) {
        console.log("nouser");
    }

    else if (error === LoginErrror.wrongCredentials) {
        console.log("wrongCredentials");
    }

    else {
        console.log("Internal");
    }
}

printErrorMsg(LoginErrror.unathorized);
