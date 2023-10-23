const express = require('express')
const app = express()
const QRCode = require('qrcode')
const generatePayload = require('promptpay-qr')
const bodyParser = require('body-parser')
const _ = require('lodash')
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))

const server = app.listen(port, () => {
    console.log('server is running..............')
})

app.post('/generateQR', (req, res) => {
    const amount = parseFloat(_.get(req, ["body", "amount"]));
    const id = _.get(req, ["body", "id"]);
    const payload = generatePayload(id, { amount });
    const option = {
        color: {
            dark: '#000',
            light: '#fff'
        }
    }
    QRCode.toDataURL(payload, option, (err, url) => {
        if (err) {
            console.log("generate fail")
            return res.status(400).json({
                RespCode: 400,
                RespMessage: 'bad : ' + err
            })
        } else {
            return res.status(200).json({
                RespCode: 200,
                RespMessage: 'good',
                Result: url
            })
        }
        
    })
})

module.exports = app;