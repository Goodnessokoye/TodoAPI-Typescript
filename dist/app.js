'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const todos_1 = __importDefault(require('./routes/todos'))
// import * as dotenv from "dotenv"
// dotenv.config({path: __dirname + "/.env"})
const connect_1 = __importDefault(require('./db/connect'))
console.log(process.env.MONGO_URI)
const app = (0, express_1.default)()
const port = 3000 || process.env.PORT
app.use(express_1.default.json())
app.use(express_1.default.urlencoded({ extended: true }))
app.use('/api', todos_1.default)
// app.listen(port, ()=>{console.log(`Application is listening on port ${port}`)})
const start = async () => {
  try {
    await (0, connect_1.default)(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()
