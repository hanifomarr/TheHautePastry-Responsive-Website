// change Navbar scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// show/hide FAQs

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon span');
            if(icon.innerHTML === "remove") {
                icon.innerHTML = "add";
            } else{
                icon.innerHTML = "remove";
            }
    })
})