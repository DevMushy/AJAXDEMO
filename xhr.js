var id = document.getElementById('id')
id.addEventListener('change', function(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts/' + id.value)
    xhr.send()
    xhr.onload = function(){
    var text = xhr.response
    var obj = JSON.parse(text)
    document.getElementById('data').innerHTML = obj.body;   
    }   
})