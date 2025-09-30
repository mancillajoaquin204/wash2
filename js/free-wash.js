// Free Wash Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('freeWashForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!validateForm(form)) {
            showErrorMessage('Please fill in all required fields correctly.');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        
        try {
            // Simulate API call
            await simulateFormSubmission();
            
            // Show success message
            showSuccessMessage('Success! Your free wash voucher has been sent to your email.');
            
            // Reset form
            form.reset();
            
            // Redirect after delay
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
            
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
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearErrors);
    });
});

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

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
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

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,49}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function simulateFormSubmission() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
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
    }, 3000);
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