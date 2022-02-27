const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6e9311eabac1e42d4e82cf7000d27773&query=${latitude},${longitude}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Temperature in '+ body.location.country + ' ' + body.current.temperature + ' Farenhait , Estimated localtime in ' + body.location.country + ' ' + body.location.localtime + ', Probable weather Moderate or heavy rain shower ' +body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast