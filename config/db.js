import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const atlasMongoURI = process.env.atlasMongo_URI
const localMongoURI = process.env.localMongoDB

export const connectDB = async () => {
    try{
        if(atlasMongoURI){
            const conn = await mongoose.connect(atlasMongoURI)
            console.log(`MongoDB Connected: MongoDB Atlas ${conn.connection.host}`);
        } else if(localMongoURI){
            const conn = await mongoose.connect(localMongoURI)
            console.log(`MongoDB Connected: MongoDB Local ${conn.connection.host}`);
        }
    }catch(error){
        console.error(`MongoDb connection failed: ${error.message}`)
        process.exit(1)
    }
}