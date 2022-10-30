// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  console("in here")
  require('dotenv').config()

  const PASSWORD = process.env.password 

  const body = JSON.parse(req.body)

  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'matyila2sango@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })

  const Data = {
    from: body.email,
    to: 'matyila2sango@gmail.com',
    subject: `Message From ${body.name}`,
    text: body.message+" | sent from "+body.email,
    html: `<div>${body.message}</div><p>Sent from: ${body.email}</p>`
   }

   console.log(Data)

   transporter.sendMail(Data, function (err, info) {
    if(err)
      console.log(err)
    else
      
      console.log(info)
  })

  res.status(200).json({ name: 'Ok' })
}
