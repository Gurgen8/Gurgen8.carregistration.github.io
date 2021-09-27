 import Cars from "../models/Cars";
 


class CarsController {

    static carsRegister = async (req,res,next)=>{
        try {
            const{name,engine,price,roule,color,year}=req.body
            const car = await Cars.create({
               name,engine,price,roule,color,year
              })

          res.json({
              status:'200',
              car

          })
            
            
        } catch (error) {
            next(error)
        
        }

        };


        static carsList = async (req, res, next) => {
            try {
              const { page = 1 } = req.query;
              const limit = 4;
              const offset = (page - 1) * limit;
              const cars = await Cars.findAll({
                limit,
                offset,
              });
              const total = await Cars.count();
              // const findAndCountAll = await Cars.findAndCountAll({
              //   limit,
              //   offset,
              // })
        
        
              res.json({
                status: '200',
                // findAndCountAll,
                total,
                pages: Math.ceil(total / limit),
                cars
              })
            } catch (e) {
              next(e)
            };
        }


     static singleCar = async (req, res, next) => {
         try {
           const { carId } = req;
           const car = await Cars.findByPk(carId);
           res.json({
             status: '200',
             car
           })
         } catch (e) {
           next(e)
         }   

    };

}

export default CarsController