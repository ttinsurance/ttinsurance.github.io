function _doMail(e) {
    const name = document.querySelector('[name="your-name"]').value;
    const email = document.querySelector('[name="your-email"]').value;
    const mobile = document.querySelector('[name="mobile"]').value;
    const company = document.querySelector('[name="company"]').value;
    const address = document.querySelector('[name="your-message"]').value;
    const body = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCompany: ${company}\nAddress: ${address}`;
    location.href = `mailto:thong@ttinsurance.com.au?subject=Website%20Enquiry&body=${encodeURI(body)}`;
}