document.getElementById('healthForm').addEventListener('submit', function(e){
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const topic = document.querySelector('input[name="topic"]:checked');
    const agree = document.getElementById('agree').checked;

    // Reset errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('topicError').textContent = '';
    document.getElementById('agreeError').textContent = '';

    if(name.length < 3){
        document.getElementById('nameError').textContent = 'Please enter at least 3 characters (sample name).';
        valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        document.getElementById('emailError').textContent = 'Please enter a valid sample email.';
        valid = false;
    }
    if(!topic){
        document.getElementById('topicError').textContent = 'Please select a topic.';
        valid = false;
    }
    if(!agree){
        document.getElementById('agreeError').textContent = 'You must agree to continue (demo check).';
        valid = false;
    }

    if(valid){
        const review = `Thank you, ${name}! You registered with sample email ${email} and selected topic: ${topic.value}.`;
        document.getElementById('reviewMessage').textContent = review;
        document.getElementById('confirmation').classList.remove('hidden');
        document.getElementById('confirmation').scrollIntoView({behavior: 'smooth'});
        this.reset();
    }
});