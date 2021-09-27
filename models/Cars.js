import {Model,DataTypes} from "sequelize";
import sequelize from "../services/sequelize";


class Cars extends Model {
 

}

Cars.init({
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    year:{
        type:DataTypes.DATE

    },
   price:{
        type:DataTypes.SMALLINT

    },
    roule:{
        type:DataTypes.ENUM('left','right')

    },
    engine:{
        type:DataTypes.ENUM('gas','benzine'),
   
    },
    color:{
        type:DataTypes.STRING

    }
},
    
    {sequelize,
    modelName:'Cars',
    tableName:'cars',
    createdAt:false,
    updatedAt:false
    
})

export default Cars