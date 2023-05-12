import { request } from 'https';
import AuthToken from './path/to/authToken';

async function PetBreedList() {
    const token = await AuthToken();
    const options = {
        "method": "GET",
        "hostname": "api.petfinder.com",
        "port": null,
        "path": "/v2/types/dog/breeds",
        "headers": {
            "Content-Length": "0",
            "Authorization": "Bearer " + token
    }
};

const req = request(options, function (res) {
    const chunks = []
    res.on("data", function (chunk){
        chunks.push(chunk);
    });
    
    res.on('end', function(){
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});
req.end()
}

PetBreedList()