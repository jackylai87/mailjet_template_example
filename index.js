require('dotenv').config()
const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY)
const email = require('./email')

const request = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
    "Messages":[
      {
        "From": {
          "Email": process.env.SV_EMAIL,
          "Name": process.env.SV_NAME
        },
        "To": [
          {
            "Email": "malcolminsushivid@gmail.com"
          }
        ],
        "TemplateID": Number(process.env.TEMPLATE_ID),
        "TemplateLanguage": true,
        "Subject": "Subject",
        "Variables": {
      "content": email.content('https://www.example.com').resetPassword
    }
      }
    ]
  })
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })