require('dotenv').config();
const fetch = require('node-fetch');

async function AuthToken(){

    let url = 'https://api.petfinder.com/v2/oauth2/token';
    
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "grant_type": "client_credentials",
        "client_id": process.env.CLIENT_ID,
        "client_secret": process.env.CLIENT_SECRET
      })
    };
    try {
      let res = await fetch(url, options)
      let json = await res.json();
      console.log(json)
      let token = json.access_token
      return token;
    } catch (err) {
      console.error('error:' + err);
    }
}
export default AuthToken