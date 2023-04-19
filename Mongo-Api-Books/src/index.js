import app from "./server.js"
 async function runserver() {
    await app.listen(app.get('port'));
    console.log('server ready', app.get('port'));
}
runserver()