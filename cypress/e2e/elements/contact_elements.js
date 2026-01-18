class ContactElements {
    buttonContact = () => {
        return 'a[href="/contact_us"]'
    }
    inputName = () => {
        return '[data-qa="name"]'
    }
    inputEmail = () => {
        return '[data-qa="email"]'
    }
    inputSubject = () => {
        return '[data-qa="subject"]'
    }
    inputMessage = () => {
        return '[data-qa="message"]'
    }
    uploadDoc = () => {
        return '[name="upload_file"]'
    }
    buttonSendForm = () => {
        return '[data-qa="submit-button"]'
    }
    titleContact = () => {
        return 'div.contact-form > .title'
    }
    statusSucess = () => {
        return '.status.alert.alert-success'
    }
    buttonHome = () => {
        return '#form-section > .btn'
    }

}

export default ContactElements