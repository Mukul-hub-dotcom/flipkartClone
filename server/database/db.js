import mongoose from 'mongoose'

export const Connection=async(userName,pasw)=>{
    const url=`mongodb+srv://${userName}:${pasw}@flipka.sun4ug7.mongodb.net/?retryWrites=true&w=majority`
    
    try {
        await mongoose.connect(url)
        console.log('Database connected Successfully')
        
    } catch (error) {
      console.log("Error,connecting database")  
    }
}
export default Connection