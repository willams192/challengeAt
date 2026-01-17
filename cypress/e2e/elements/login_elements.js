class LoginElments {
    buttonLogin = () => {
        return 'a[href="/login"]'
    }
    inputEmail = () => {
        return '[data-qa="login-email"]'
    }
    inputPassword = () => {
        return '[data-qa="login-password"]'
    }
    confirmLogin = () => {
        return '[data-qa="login-button"]'
    }
    formsLogin = () => {
        return 'form[action="/login"]'
    }
    buttonDeleteAccount = () => {
        return 'a[href="/delete_account"]'
    }
    messageDeleteAccount = () => {
        return '[data-qa="account-deleted"]'
    }

}

export default LoginElments