export let server_echo = ''

let json = {
    json:JSON.stringify({
        a:1,
        b:2
    }),
    delay:3
}

fetch('/echo/',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:json.json
}).then((response) =>{
    return response.json()
}).then((result)=>{
    alert(result)
}).catch((error)=>{
    console.log('Request failed',error)
})