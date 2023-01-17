import app from './app';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config()

const port = process.env.PORT || 4000;
// mongoose.connect(DB).then((con) => {
//     console.log('DATABASE CONNECTED SUCCESSFULLY')
// }).catch(err => {
//     console.log("Oooooooops DB Not connected")
// })

app.listen(port, () => {
    console.log(`--server running on port: ${port}`)
})
console.log(process.env.PORT)