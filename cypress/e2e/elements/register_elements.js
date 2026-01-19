class RegisterElements {
    buttonRegister = () => {
        return 'a[href="/login"]'
    }
    titleRegister = () => {
        return '.signup-form'
    }
    inputName = () => {
        return '[data-qa="signup-name"]'
    }
    inputEmail = () => {
        return '[data-qa="signup-email"]'
    }
    buttonSignup = () => {
        return '[data-qa="signup-button"]'
    }
    buttonTitleOption = () => {
        return '#id_gender1'
    }
    optionUniform = () => {
        return '#optin'
    }
    optionNewsletter = () => {
        return '#newsletter'
    }
    titleSignup = () => {
        return '.title.text-center'
    }
    inputPassword = () => {
        return '[data-qa="password"]'
    }
    days = () => {
        return '[data-qa="days"]'
    }
    months = () => {
        return '[data-qa="months"]'
    }
    years = () => {
        return '[data-qa="years"]'
    }
    inputFirstName = () => {
        return '[data-qa="first_name"]'
    }
    inputLastName = () => {
        return '[data-qa="last_name"]'
    }
    inputCompany = () => {
        return '[data-qa="company"]'
    }
    inputAdress = () => {
        return '[data-qa="address"]'
    }
    inputAdress2 = () => {
        return '[data-qa="address2"]'
    }
    selectCountry = () => {
        return '[data-qa="country"]'
    }
    inputState = () => {
        return '[data-qa="state"]'
    }
    inputCity = () => {
        return '[data-qa="city"]'
    }
    inputZipcode = () => {
        return '[data-qa="zipcode"]'
    }
    inputPhoneNumber = () => {
        return '[data-qa="mobile_number"]'
    }
    buttonCreateAccount = () => {
        return '[data-qa="create-account"]'
    }
    titleAccountCreate = () => {
        return '[data-qa="account-created"]'
    }
    buttonContinueAccount = () => {
        return '[data-qa="continue-button"]'
    }
    errorEmailExists = () => {
        return 'form[action="/signup"] p'
    }

}
export default RegisterElements