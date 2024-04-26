function showPasswordRequirements() {
    const passwordRequirements = document.getElementById('password-requirements');
    passwordRequirements.classList.add('show'); // Add the 'show' class to trigger animation
}

function showConfirmPasswordMessage() {
    const confirmPasswordMessage = document.getElementById('confirm-password-message');
    confirmPasswordMessage.classList.add('show'); // Add the 'show' class to trigger animation
}

function handleSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const errorMessage = document.getElementById('error-message');

    // Validate email and confirm email
    if (email !== confirmEmail) {
        errorMessage.textContent = 'Email addresses do not match.';
        return;
    }

    // Validate password and confirm password
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Perform sign-up process (e.g., make API request)
    // Replace the following code with your actual sign-up logic
    console.log('Signing up...');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear error message
    errorMessage.textContent = '';

    // Reset form (optional)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
    
    // Hide password requirements and confirm password message after submission
    const passwordRequirements = document.getElementById('password-requirements');
    const confirmPasswordMessage = document.getElementById('confirm-password-message');
    passwordRequirements.classList.remove('show');
    confirmPasswordMessage.classList.remove('show');

    // Display success message or redirect to another page
    // Replace the following line with your desired success handling
    alert('Sign-up successful!');

    // Prevent form submission (handled by `return false;` in `onsubmit`)
    return false;
}

function handleLogin() {
    // Add login handling logic here
    console.log('Login button clicked.');
}
