function _doMail(e) {
    const REQUIRED_FIELDS = ['name', 'email', 'mobile'];
    const fields = {
        name: document.querySelector('[name="your-name"]'),
        email: document.querySelector('[name="your-email"]'),
        mobile: document.querySelector('[name="mobile"]'),
        company: document.querySelector('[name="company"]'),
        insurance: document.querySelector('[name="insurance"]'),
        info: document.querySelector('[name="additional-info"]')
    };

    const name = fields.name.value;
    const email = fields.email.value;
    const mobile = fields.mobile.value;
    const company = fields.company.value;
    const insurance = fields.insurance.value;
    const info = fields.info.value;

    let invalidFields = false;
    REQUIRED_FIELDS.forEach(field => {
        if (!fields[field].value) {
            fields[field].classList.add('invalid');
            invalidFields = true;
        } else {
            fields[field].classList.remove('invalid');
        }
    });
    
    if (invalidFields) {
        return;
    }
    
    const body = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCompany: ${company}\nInsurance required: ${insurance}\nAdditional Info: ${info}`;
    location.href = `mailto:thong@ttinsurance.com.au?subject=Website%20Enquiry&body=${encodeURI(body)}`;
}