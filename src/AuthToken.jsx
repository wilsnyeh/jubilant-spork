
function AuthToken(){
        const fetch = require('node-fetch');

    let url = 'https://api.petfinder.com/v2/oauth2/token';
    
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: '{"grant_type":"client_credentials","client_id":process.env.CLIENT_ID,"client_secret":process.env.CLIENT_SECRET}'
    };
    console.log(body)
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
      
    let token = res
}
export default AuthToken