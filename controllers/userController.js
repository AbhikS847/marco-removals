const signUpUser = (req, res) => {
    res.send('Signup route');
}

const loginUser = (req, res) => {
    res.send('Login route');
}

module.exports = {
    signUpUser, 
    loginUser
}
