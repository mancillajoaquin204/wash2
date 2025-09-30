// Careers Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('applicationModal');
    const modalClose = document.getElementById('modalClose');
    const modalPositionTitle = document.getElementById('modalPositionTitle');
    const applicationForm = document.getElementById('applicationForm');
    const submitBtn = applicationForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    // Load careers-specific styles
    const careersCSS = document.createElement('link');
    careersCSS.rel = 'stylesheet';
    careersCSS.href = 'css/careers.css';
    document.head.appendChild(careersCSS);

    // Apply button click handlers
    const applyButtons = document.querySelectorAll('.apply-position-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const position = e.target.getAttribute('data-position');
            modalPositionTitle.textContent = position;
            modal.classList.add('show');
        });
    });

    // Modal close handlers
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Application form submission
    applicationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!validateApplicationForm(applicationForm)) {
            showErrorMessage('Please fill in all required fields correctly.');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        
        try {
            // Simulate API call
            await simulateApplicationSubmission();
            
            // Show success message
            showSuccessMessage('Application submitted successfully! We\'ll be in touch soon.');
            
            // Reset form and close modal
            applicationForm.reset();
            modal.classList.remove('show');
            
        } catch (error) {
            showErrorMessage('Something went wrong. Please try again.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });
    
    // Real-time validation
    const inputs = applicationForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearErrors);
    });
});

function validateApplicationForm(form) {
    const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    requiredInputs.forEach(input => {
        if (input.type === 'checkbox') {
            if (!input.checked) {
                isValid = false;
                input.closest('.checkbox-group').style.borderColor = '#e74c3c';
            } else {
                input.closest('.checkbox-group').style.borderColor = 'transparent';
            }
        } else {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Clear previous errors
    field.classList.remove('error');
    
    if (field.hasAttribute('required') && !value) {
        field.classList.add('error');
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value && !validateEmail(value)) {
        field.classList.add('error');
        return false;
    }
    
    // Phone validation
    if (field.type === 'tel' && value && !validatePhone(value)) {
        field.classList.add('error');
        return false;
    }
    
    return true;
}

function clearErrors(e) {
    e.target.classList.remove('error');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,49}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function simulateApplicationSubmission() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2500);
    });
}

function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'toast toast-success show';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function showErrorMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'toast toast-error show';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}