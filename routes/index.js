import express from 'express';
const router = express.Router();
import CarsController from "../controllers/CarsControllers"

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('home', { title: 'Express'});
});


//carsregister in database
  router.post("/register", CarsController.carsRegister)

  //singlepage car
  router.get("/profile", CarsController.singleCar)

  //all cars
  router.get("/allcars", CarsController.carsList)


module.exports = router;
