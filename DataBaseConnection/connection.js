import { Sequelize } from 'sequelize';

 export const sequelize = new Sequelize("blybzya3panolaayvh39","uuaykwztsomkjdja","dGnUTsQxIEMgr2T1FBV3",{
  host:"blybzya3panolaayvh39-mysql.services.clever-cloud.com",
  dialect:"mysql"
 })

export const connect= async()=>{

try {
  await sequelize.sync({alter:true,
    force:false
  })
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


}






