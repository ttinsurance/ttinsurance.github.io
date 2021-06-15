function _doMail(e) {
    const REQUIRED_FIELDS = ['name', 'email', 'mobile'];
    const fields = {
        name: document.querySelector('[name="your-name"]'),
        email: document.querySelector('[name="your-email"]'),
        mobile: document.querySelector('[name="mobile"]'),
        company: document.querySelector('[name="company"]'),
        address: document.querySelector('[name="your-message"]')
    };

    const name = fields.name.value;
    const email = fields.email.value;
    const mobile = fields.mobile.value;
    const company = fields.company.value;
    const address = fields.address.value;

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
    
    const body = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCompany: ${company}\nAddress: ${address}`;
    location.href = `mailto:thong@ttinsurance.com.au?subject=Website%20Enquiry&body=${encodeURI(body)}`;
}