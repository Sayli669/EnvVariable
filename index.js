///Envirnment variables

const app = require('http').createServer((req, res) => res.send('Ahoy!'));
// const PORT = process.env.PORT || 3000;
require('dotenv').config()
process.env.MY_VARIABLE = 'ahoy';
console.log(process.env.MY_VARIABLE)
const {
    NODE_ENV,PORT,HOST
} = process.env
console.log(NODE_ENV,PORT,HOST)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

