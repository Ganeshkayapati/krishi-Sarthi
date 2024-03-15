module.exports.isLoggedIn=async (req,res,next)=>{
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in to rent your vehicle");
        return res.render("users/login.ejs"); // Corrected the path
    }
    next();
}