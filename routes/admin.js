const express = require("express");
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require("../config/admin.auth");
// Load User Controller
const adminController = require("../controllers/admin.controller");
const hotel_controller = require("../controllers/hotel.controller");

router.get('/SignIn', forwardAuthenticated, (req, res) => res.render('adminSignIn'));

router.get('/SignUp', forwardAuthenticated, (req, res) => res.render('AdminSignUp'));

router.get('/Panel', ensureAuthenticated, (req, res) => res.render('adminPanel'));

router.get('/PanelAgent', ensureAuthenticated, (req, res) => res.render('agentSignup'));

router.get('/PanelTraveller', ensureAuthenticated, (req, res) => res.render('travelerSignUpScreen'));

router.get('/addMoreLocation', ensureAuthenticated, (req, res) => res.render('addMoreLocation'));

router.get('/editLocation', ensureAuthenticated, (req, res) => res.render('editLocation'));

router.get('/admin/addAgent', ensureAuthenticated, (req, res) => res.render('addAgent'));
//hotel
router.get("/test", hotel_controller.test);
router.get("/add", hotel_controller.add);
router.post("/add", hotel_controller.create);
router.get("/all", hotel_controller.all);
router.get("/:id", hotel_controller.details);
router.get("/update/:id", hotel_controller.update);
router.post("/update/:id", hotel_controller.updateHotel);
router.get("/delete/:id", hotel_controller.delete);

// Login Page
router.get("/SignIn", forwardAuthenticated, adminController.login);
// Register Page
router.get("/SignUp", forwardAuthenticated, adminController.register);

// Register
router.post("/SignUp", adminController.registerAdmin);

// Login
router.post("/SignIn", adminController.loginAdmin);

// Logout
router.get("/logout", adminController.logout);

module.exports = router;
