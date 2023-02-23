const express = require('express') 
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const sendEmail = async (email, text) => {
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'eddyalex.dev@gmail.com',
      pass: 'fzxwkbmpcfnrtbhm'
    }
  }

  const message = {
    from: email,
    to: 'ayatosayory@gmail.com',
    subject: 'animal en peligro',
    text: text
  }

  const transport = nodemailer.createTransport(config)

  const info = await transport.sendMail(message)

  return info
}

// Route
app.get('/', (req, res) => {
  res.send('initializated') 
})

app.post('/email', (req, res) => {
  const {email, text} = req.body
  sendEmail(email, text) 
  res.send("Correo enviado")
})


app.listen(8001, () => console.log('app initializated in 8001'))
